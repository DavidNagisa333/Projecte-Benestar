import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';


@Injectable()

export class AddOficinesService{
private addUrl = 'http://172.17.0.242:8080/benestar/addOficina';
//////////////////////cambiar ip///////////////////////////


constructor(private http: Http){}

addOficina(oficina){   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      	let options = new RequestOptions({ headers: headers });


      	const body = "id=" + oficina.id + "&codiPostal" + oficina.codiPostal + "&poblacio=" + oficina.poblacio + "&Ppovincia=" + oficina.provincia + "&direccio=" + oficina.direccio;

      	return this.http
      			   //.post(url, JSON.stringify(oficina), options)
      			   .post(this.addUrl, body, options);
                   //.map(res => res.json());
	}
}