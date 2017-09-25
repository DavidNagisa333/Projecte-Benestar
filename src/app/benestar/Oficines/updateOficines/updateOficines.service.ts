import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';



@Injectable()

export class UpdateOficinesService{
private updUrl = 'http://172.17.0.242:8080/benestar/updateOficines?';
//////////////////////cambiar ip///////////////////////////


constructor(private http: Http){}


updateOficina(oficina){ 

		var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        const body = "id=" + oficina.id + "&codiPostal" + oficina.codiPostal + "&poblacio=" + oficina.poblacio + "&Ppovincia=" + oficina.provincia + "&direccio=" + oficina.direccio;

        return this.http
        		   .put(this.updUrl + body, body, {headers:headers});
}
}
/*

llistarOficina(id) {

		const url = "http://172.17.0.242:8080/benestar/allPersones?id=" + id;

        return this.http
                   .get(url)
                   .map(res => res.json());
    }
*/
}