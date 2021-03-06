import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Cotxe } from './cotxe';
//import {Model} from './model';
import { Observable } from 'rxjs/Observable';
import { sprintf } from "sprintf-js";
import { LoginService } from '../../../login/login.service';

@Injectable()


export class PrestacioService {
    constructor(private http: Http, private loginService: LoginService) { }

private addUrl = 'http://localhost:8080/benestar/addPrestacio?';
private allUrl = 'http://localhost:8080/benestar/allPrestacio?ipp=';
private delUrl = 'http://localhost:8080/benestar/delPrestacio?';
private putUrl = 'http://localhost:8080/benestar/putPrestacio?';


//ADD
addPrestacio(prestacio){    
    
    var creds = "tipus=" + prestacio.tipus + "&descripcio=" + prestacio.descripcio;
    var headers = new Headers({
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + this.loginService.getToken()
    });
    //headers.append('Content-Type');

    return this.http.post(this.addUrl, creds, {
        headers:headers})
       //.map((response: Response) => {})

}

//ALL
allPrestacio(ipp) {
 const url = this.allUrl + ipp;
    let headers = new Headers({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + this.loginService.getToken()
    });
        return this.http
                   .get(url, {headers:headers})
                   .map(res => res.json());
  }


//DEL
delPrestacio(prestacio){     
    
 var crear = "id=" + prestacio.id;
       var headers = new Headers({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.loginService.getToken()
       });
       //headers.append('Content-Type', 'application/x-www-form-urlencoded');


       return this.http.delete(this.delUrl+ crear, {
           headers: headers
       })
           //.map((response: Response) => {})
            
    }

//PUT
putPrestacio(prestacio){     
   
    let params: URLSearchParams = new URLSearchParams();
params.set('id', prestacio.id);
params.set('tipus', prestacio.tipus);
params.set('descripcio', prestacio.descripcio);


    //let options = new RequestOptions({ headers: headers });
    let body = params.toString();
    var headers = new Headers({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.loginService.getToken()
    });       
        //headers.append('Access-Control-Allow-Origin', '*');  

return this.http.put(this.putUrl + body, body, {headers: headers})    
    //.map((response: Response) => {})
           
}
	// L L I S T A R   T O T E S  L E S   P E R S O N E S
	

    // L L I S T A R   "X"   P E R S O N E S,   S E G O N S   A T R I B U T
	/*llistarXpersones(atribut, valor) {

		const url = "http://172.17.0.191:8080/benestar/llistarXpersones?atribut=" + atribut + "&valor=" + valor;

		return this.http
				   .get(url)
				   .map(res => res.json());
	}*/

}
