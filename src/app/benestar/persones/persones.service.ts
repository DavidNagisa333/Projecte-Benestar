import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { LoginService } from '../../login/login.service';

@Injectable()
export class PersonesService {

  url = "http://localhost:8080/benestar";

  headersU = new Headers({
    'Content-type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer ' + this.loginService.getToken()
  });

  headersCRD = new Headers({
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + this.loginService.getToken()
  });

	constructor(private http: Http, private loginService: LoginService) { }

<<<<<<< HEAD
=======

>>>>>>> c24be4f063b3bf0eb508ca7a60a0b4f39cefaa2c
	// A F E G I R   U N A   P E R S O N A

	afegirPersona(persona) {

    const url = this.url + "/afegirPersona?";

  	const body = "nom=" + persona.nom + "&cognoms=" + persona.cognoms + "&correu=" + persona.correu + "&telefon=" + persona.telefon + "&mobil=" + persona.mobil +
  				 "&adreca=" + persona.adreca + "&localitat=" + persona.localitat + "&comarca=" + persona.comarca;

  	return this.http
  			   .post(url, body, {headers:this.headersU});
               //.map(res => res.json());
	}


	// L L I S T A R   T O T E S  L E S   P E R S O N E S
	llistarPersones(ipp, query) {

<<<<<<< HEAD
=======
<<<<<<< HEAD
    query = query ? "&filter=" + query : "&filter=" + "";
    const url = this.url + "/llistarPersones?ipp=" + ipp + query;;
=======
<<<<<<< HEAD

=======
>>>>>>> abc259035cd50f6a655dfeb7db694366a3a6062d
>>>>>>> 7d180a3c148899453d19956cabe5f5eecaee48f0
    query = query ? "&filter=" + query : "&filter=" + "";
    const url = this.url + "/llistarPersones?ipp=" + ipp + query;;


    const headers = new Headers({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + this.loginService.getToken(),
    });

<<<<<<< HEAD
=======
>>>>>>> abc259035cd50f6a655dfeb7db694366a3a6062d
>>>>>>> c24be4f063b3bf0eb508ca7a60a0b4f39cefaa2c
>>>>>>> 7d180a3c148899453d19956cabe5f5eecaee48f0

    return this.http
               .get(url, {headers:this.headersCRD})
               .map(res => res.json());
    }


	// M O D I F I C A R   U N A   P E R S O N A
	modPersona(persona) {

    const url = this.url + "/modPersona?";

    const body = "id=" + persona.id + "&nom=" + persona.nom + "&cognoms=" + persona.cognoms + "&correu=" + persona.correu + "&telefon=" + persona.telefon + "&mobil=" + persona.mobil +
  				 "&adreca=" + persona.adreca + "&localitat=" + persona.localitat + "&comarca=" + persona.comarca;

    return this.http
    		   .put(url + body, body, {headers:this.headersCRD});
    		   //.map(res => res.json())
	}


	// E S B O R R A R   U N A   P E R S O N A
    esborrarPersona(persona) {

      const url = this.url + "/esborrarPersona?id=" + persona.id;

    	return this.http
        		   .delete(url, {headers:this.headersCRD});
        		   //.map(res => res.json());
    }
}