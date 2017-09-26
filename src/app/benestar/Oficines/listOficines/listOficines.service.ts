import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';



@Injectable()

export class ListOficinesService{
private listUrl = 'http://172.17.0.242:8080/benestar/allOficines?id=';
//////////////////////cambiar ip///////////////////////////


constructor(private http: Http){}


listOficina(oficina){ 
	const url = this.listUrl + oficina.id;

        return this.http
                   .get(url)
                   .map(res => res.json());
<<<<<<< HEAD

}

/*

llistarOficina(id) {

		const url = "http://172.17.0.242:8080/benestar/allPersones?id=" + id;

        return this.http
                   .get(url)
                   .map(res => res.json());
=======
>>>>>>> 24e20f9daad038557b63940aed2e9839a96bab27
    }
}
