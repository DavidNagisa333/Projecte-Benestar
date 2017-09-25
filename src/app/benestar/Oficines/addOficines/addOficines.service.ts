import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';



@Injectable()

export class AddOficinesService{
private addUrl = 'http://172.17.0.242:8080/benestar/addOficina';
//////////////////////cambiar ip///////////////////////////


constructor(private http: Http){}

addOficina(oficina){   var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
      	


      	const body = "id=" + oficina.id + "&codiPostal" + oficina.codiPostal + "&poblacio=" + oficina.poblacio + "&Ppovincia=" + oficina.provincia + "&direccio=" + oficina.direccio;

      	return this.http
      			   //.post(url, JSON.stringify(oficina), options)
      			   .post(this.addUrl, body, headers);
                   //.map(res => res.json());
	}
}