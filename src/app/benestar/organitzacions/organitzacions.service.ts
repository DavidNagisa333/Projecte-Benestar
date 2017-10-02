import { Injectable } from '@angular/core';
import {Http,Headers,Response,RequestOptions}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../../login/login.service';
import { JwtHelper } from 'angular2-jwt';
//import { JwtHttp } from 'angular2-jwt-refresh';
import 'rxjs/add/operator/map'

@Injectable()
export class OrganitzacionsService {    

  JwtHelper = new JwtHelper();
  constructor(private http: Http,private loginService: LoginService) {}

  token = this.loginService.getToken();

    private headers = new Headers({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
    }); 

    addOrganitzacio(item){     
        var Url = 'http://172.17.10.48:8080/organitzacio/addOrganitzacio?';
        return this.http
           .post(Url,JSON.stringify(item),{headers:this.headers})
           .map((response: Response ) => {});
    }
    updateOrganitzacio(item){  
        var Url = 'http://172.17.10.48:8080/organitzacio/updateOrganitzacio?';
        return this.http
            .put(Url,JSON.stringify(item),{headers:this.headers})
            .map((response: Response ) => {});
    }
    
    delOrganitzacio(id){  ;   
    var Url = 'http://172.17.10.48:8080/organitzacio/delOrganitzacio';
    var creds = "?id=" + id;
       return this.http
           .delete(Url,{headers:this.headers})
           .map((response: Response) => {});        
    }        
    
    listOrganitzacio(ipp) {  
       var Url = 'http://172.17.10.48:8080/organitzacio/listOrganitzacions?itemsPerPage=' + ipp;
       return this.http
       .get(Url,{headers:this.headers})
       .map(res => res.json());        
    }
}
