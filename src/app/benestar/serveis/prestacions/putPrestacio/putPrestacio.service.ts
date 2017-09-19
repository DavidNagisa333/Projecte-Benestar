import {Injectable}  from '@angular/core';
import {Http,Headers,RequestOptions,URLSearchParams,Response}  from '@angular/http';
import 'rxjs/add/operator/map';
//import { Cotxe } from './cotxe';
//import {Model} from './model';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";


@Injectable()

export class PutPrestacioService{
private updateUrl = 'http://172.17.0.161:8080/escola/putCurs?';

constructor(private http: Http){}

putPrestacio(putId,putTipus,putDescripcio){     
   
    /*
    var creds = "id=" + addId +  "&name=" + addName + "&telefon=" + addTel + "&pais=" + addCountry + "&correu=" + addMail;
        
        var headers = new Headers();       
        headers.append('Access-Control-Allow-Origin', '*');       

        var a = this.http.put(this.updateUrl+creds,{
            headers:headers
        })
                    .map(res => res.json());
    return a;
    */
        let params: URLSearchParams = new URLSearchParams();
params.set('id', putId);
params.set('tipus', putTipus);
params.set('descripcio', putDescripcio);


    let options = new RequestOptions({ headers: headers });
    let body = params.toString();
    var headers = new Headers();       
        headers.append('Access-Control-Allow-Origin', '*');  

return this.http.put(this.updateUrl+body,options)    
    .map((response: Response) => {})
           
}
}