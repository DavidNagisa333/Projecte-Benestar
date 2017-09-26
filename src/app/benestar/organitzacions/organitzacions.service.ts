import { Injectable } from '@angular/core';
import {Http,Headers,Response,RequestOptions}  from '@angular/http';
<<<<<<< HEAD
=======

>>>>>>> 24e20f9daad038557b63940aed2e9839a96bab27
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../../login/login.service';
import 'rxjs/add/operator/map'

@Injectable()
export class OrganitzacionsService {    

  constructor(private http: Http,private loginService: LoginService) {}
    
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
    
    listOrganitzacio(ipp) {    
    let headers = new Headers; 
    var token = this.loginService.getToken();
    headers.set("Authorization","Bearer " + token);
    
    let options = new RequestOptions({headers: headers});  

    var Url = 'http://172.17.0.98:8080/organitzacio/listOrganitzacions?itemsPerPage=' + ipp;
    return this.http.get(Url,options)
                .map(res => res.json());        
    }

    afegirPersona(persona) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        const url = "http://172.17.0.191:8080/benestar/afegirPersona?";

        const body = "nom=" + persona.nom + "&cognoms=" + persona.cognoms + "&correu=" + persona.correu + "&telefon=" + persona.telefon + "&mobil=" + persona.mobil +
               "&adreca=" + persona.adreca + "&localitat=" + persona.localitat + "&comarca=" + persona.comarca;

        return this.http
               //.post(url, JSON.stringify(persona), options)
               .post(url, body, options);
                   //.map(res => res.json());
  }

  // L L I S T A R   T O T E S  L E S   P E R S O N E S
  

  // M O D I F I C A R   U N A   P E R S O N A
  modPersona(persona) {
    const url = "http://172.17.0.191:8080/benestar/modPersona?";

    const headers = new Headers();
        //headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');

        const body = "id=" + persona.id + "&nom=" + persona.nom + "&cognoms=" + persona.cognoms + "&correu=" + persona.correu + "&telefon=" + persona.telefon + "&mobil=" + persona.mobil +
               "&adreca=" + persona.adreca + "&localitat=" + persona.localitat + "&comarca=" + persona.comarca;

        return this.http
               .put(url + body, body, {headers:headers});
               //.map(res => res.json())
  }

  // E S B O R R A R   U N A   P E R S O N A
    esborrarPersona(persona) {

      const url = "http://172.17.0.191:8080/benestar/esborrarPersona?id=" + persona.id;

      return this.http
               .delete(url);
               //.map(res => res.json());
    }
}
