import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';



@Injectable()

export class AddCopagamentService{
private addUrl = 'http://172.17.0.161:8080/escola/addCurs';
//////////////////////cambiar ip///////////////////////////


constructor(private http: Http){}


addCopagament(addTipus,addDescripcio){    
    
        var creds = "tipus=" + addTipus + "&descripcio=" + addDescripcio;

    //console.log(creds);
        
          var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return this.http.post(this.addUrl,creds,{
            headers:headers
        })
           .map((response: Response) => {})
           
    }
}
