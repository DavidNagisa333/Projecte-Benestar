import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';



@Injectable()

export class DeleteOficinesService{
private addUrl = 'http://172.17.0.242:8080/benestar/deleteOficina?id=';
//////////////////////cambiar ip///////////////////////////


constructor(private http: Http){}


deleteOficina(oficina){ 
	const url = delUrl + oficina.id;

    	return this.http
        		   .delete(url);
	}
}