import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { JwtHelper} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {

   JwtHelper = new JwtHelper();
   public token: string;
   public tokenExpired: boolean;
   public username:string;
   public password:string;   

   constructor(private http: Http) {
       var currentUser = JSON.parse(localStorage.getItem('currentUser'));
       this.token = currentUser && currentUser.token;
   }


   private headers = new Headers({'Content-Type':'application/json'});
   private authUrl = 'http://localhost:8080/auth';
   
   login(username: string, password: string): Observable<boolean> {       
       let body:any = { "username": username, "password": password };
       return this.http.post(this.authUrl,body, {headers: this.headers})
           .map((response: Response) => {
               // login successful if there's a jwt token in the response
               let token = response.json() && response.json().token;
               if (token) {
                   // store username and jwt token in local storage to keep user logged in between page refreshes
                   localStorage.setItem('currentUser', JSON.stringify({ password: password,username: username, token: token }));
                   // return true to indicate successful login
                   return true;
               } else {
                   // return false to indicate failed login
                   return false;
               }
           }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        }

   getToken(): string {
        try{          
          var tokenExpired = this.JwtHelper.isTokenExpired(this.token.toString());
          //if token expired, deletes this token and logout
          if(tokenExpired){            
              //revmove token from localstorage             
              this.logout();
             //reloads pages, this knows that token are been deleted and do the logout
              return this.token ? this.token : "";          
          }else if(!tokenExpired && this.token!=null){
            //if token are not expired, we need to return refreshed token               
               return  this.refreshToken();
           }else{               
             throw new Error();
           }                    
        }catch(e){ 
          return this.token ? this.token : "";
        }        
    }
    refreshToken():string{
      try{
        this.username = JSON.parse(localStorage.getItem('currentUser'))["username"];
        this.password = JSON.parse(localStorage.getItem('currentUser'))["password"];
      }catch(e){              
      }        
      try{        
        localStorage.removeItem('currentUser')['token'];
        this.token=null;
        this.login(this.username,this.password);
        return this.token ? this.token : "";  
      }catch(e){             
        this.login(this.username,this.password);
        return this.token ? this.token : ""; 
      }  
    }
    logout(): void {      
        // clear token remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        window.location.reload();
    }
  }