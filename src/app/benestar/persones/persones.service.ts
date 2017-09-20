import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonesService {

	constructor(private http: Http) { }

	// A F E G I R   U N A   P E R S O N A
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
	llistarPersones(ipp) {

		const url = "http://172.17.0.191:8080/benestar/llistarPersones?ipp=" + ipp;

        return this.http
                   .get(url)
                   .map(res => res.json());
    }

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

    // L L I S T A R   "X"   P E R S O N E S,   S E G O N S   A T R I B U T
	/*llistarXpersones(atribut, valor) {

		const url = "http://172.17.0.191:8080/benestar/llistarXpersones?atribut=" + atribut + "&valor=" + valor;

		return this.http
				   .get(url)
				   .map(res => res.json());
	}*/
}
