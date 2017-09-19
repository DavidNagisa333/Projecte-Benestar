import { Injectable } from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class OrganitzacionsService {    

  constructor(private http: Http) {}
    
    private headers = new Headers({
     'Content-Type': 'application/json'
     //'Authorization': 'Bearer ' + this.loginService.getToken()
     });
    
    addOrganitzacio(id,nom,telefon){     
        var Url = 'http://172.17.0.98:8080/organitzacio/addOrganitzacio?';
        var creds = "id=" + id + "&nom=" + nom + "&telefon=" + telefon;
        //  var headers = new Headers();
       // this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        var a = this.http.post(Url,creds,{
            headers:this.headers
        })
           .map((response: Response ) => {});
    return a;
    }
    
    delOrganitzacio(id){     
    var Url = 'http://172.17.0.98:8080/organitzacio/delOrganitzacio';
    var crear = "?id=" + id;
       return this.http.delete(Url+ crear, {
           headers: this.headers
       })
           .map((response: Response) => {}) ;        
    }
    
    listOrganitzacio() {        
      var Url = 'http://172.17.0.98:8080/organitzacio/listOrganitzacions';
      var a = this.http.get(Url,{
          headers : this.headers
      })
                .map(res => res.json());        
      return a;
    }
}
