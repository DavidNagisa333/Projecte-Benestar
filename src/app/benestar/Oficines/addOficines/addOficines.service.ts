import {Injectable}  from '@angular/core';
import {Http,Headers,Response, RequestOptions}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';


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
<<<<<<< HEAD
      			   .post(this.addUrl, body, options);
=======
<<<<<<< HEAD
      			   .post(this.addUrl, body, headers);
=======
      			   .post(this.addUrl, body, options);
>>>>>>> bc5e0972375ea6d01fd0b096ee4e6cae0c5fdd5b
>>>>>>> 7c7702756a631436a86142576dd1ccedd98c03b6
                   //.map(res => res.json());
	}
}