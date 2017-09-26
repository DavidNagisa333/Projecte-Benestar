import {Injectable}  from '@angular/core';
import {Http,Headers,Response, RequestOptions}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
<<<<<<< HEAD

=======
>>>>>>> 24e20f9daad038557b63940aed2e9839a96bab27

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
      			   .post(this.addUrl, body);
<<<<<<< HEAD
=======


                   //.map(res => res.json());
>>>>>>> 24e20f9daad038557b63940aed2e9839a96bab27
	}
}