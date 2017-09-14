import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class JaumeMGService {

	constructor(private http: Http) { }

	// A F E G I R   U N A   P E R S O N A
	addPersona(nom, cognoms, naixement, correu, telefon, mobil, adreca, localitat, comarca){
		
		const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        const url = "http://172.17.0.191:8080/benestar/addPersona?";

        const body = "nom=" + nom + "&cognoms=" + cognoms + "&naixement=" + naixement + "&correu=" + correu + "&telefon=" + telefon +
        			 "&mobil=" + mobil + "&adreca=" + adreca + "&localitat=" + localitat + "&comarca=" + comarca;

        return this.http.post(url, body, {headers:headers}).map(res => res.json());
	}
}
