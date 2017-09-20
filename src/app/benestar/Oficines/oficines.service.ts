import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class OficinesService {

  constructor(private http: Http) { }

	// A F E G I R   U N A   P E R S O N A
	afegirOficina(oficina) {
		let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      	let options = new RequestOptions({ headers: headers });

      	const url = "http://172.17.0.242:8080/benestar/addOficina?";

      	const body = "id=" + oficina.id + "&codiPostal" + oficina.codiPostal + "&poblacio=" + oficina.poblacio + "&Ppovincia=" + oficina.provincia + "&direccio=" + oficina.direccio;

      	return this.http
      			   //.post(url, JSON.stringify(oficina), options)
      			   .post(url, body, options);
                   //.map(res => res.json());
	}

	// L L I S T A R   T O T E S  L E S   P E R S O N E S
	llistarPersones(id) {

		const url = "http://172.17.0.242:8080/benestar/allPersones?id=" + id;

        return this.http
                   .get(url)
                   .map(res => res.json());
    }

	// M O D I F I C A R   U N A   P E R S O N A
	modOficina(oficina) {
		const url = "http://172.17.0.242:8080/benestar/updateOficina?";

		const headers = new Headers();
        //headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');

        const body = "id=" + oficina.id + "&codiPostal" + oficina.codiPostal + "&poblacio=" + oficina.poblacio + "&Ppovincia=" + oficina.provincia + "&direccio=" + oficina.direccio;

        return this.http
        		   .put(url + body, body, {headers:headers});
        		   //.map(res => res.json())
	}

	// E S B O R R A R   U N A   P E R S O N A
    esborrarOficina(oficina) {

    	const url = "http://172.17.0.242:8080/benestar/deleteOficina?id=" + oficina.id;

    	return this.http
        		   .delete(url);
        		   //.map(res => res.json());
    }
}
