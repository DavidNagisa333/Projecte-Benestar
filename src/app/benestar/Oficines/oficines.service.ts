import { Injectable } from '@angular/core';
import {Http,Headers,Response,RequestOptions}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../../login/login.service';
import { JwtHelper } from 'angular2-jwt';
//import { JwtHttp } from 'angular2-jwt-refresh';
import 'rxjs/add/operator/map'

@Injectable()
export class OficinesService {    

  JwtHelper = new JwtHelper();
  constructor(private http: Http,private loginService: LoginService) {}

  token = this.loginService.getToken();

    private headers = new Headers({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
    }); 

    addOficina(item){   
        var Url = 'http://localhost:8080/oficina/addOficina';
        return this.http
           .post(Url,JSON.stringify(item),{headers:this.headers})
           .map((response: Response ) => {});
    }
    updateOficina(item){  
        var Url = 'http://localhost:8080/oficina/updateOficina';
        return this.http
            .put(Url,JSON.stringify(item),{headers:this.headers})
            .map((response: Response ) => {});
    }
    
    delOficina(id){  ;   
    var Url = 'http://localhost:8080/oficina/delOficina';
    var creds = "?id=" + id;
       return this.http
           .delete(Url,{headers:this.headers})
           .map((response: Response) => {});        
    }        
    
    listOficina(ipp) {  
       var Url = 'http://localhost:8080/oficina/listOficines?itemsPerPage=' + ipp;
       return this.http
       .get(Url,{headers:this.headers})
       .map(res => res.json());        
    }
}
