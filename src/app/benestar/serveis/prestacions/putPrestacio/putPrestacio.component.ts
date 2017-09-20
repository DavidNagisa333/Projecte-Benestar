import {Component, OnInit} from '@angular/core';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';
import {PutPrestacioService} from './putPrestacio.service';


@Component({
  selector: 'putPrestacio',
  templateUrl:'./putPrestacio.component.html',
  //styleUrls: ['../../escola.css'],
  providers: [PutPrestacioService]
})

    export class PutPrestacioComponent{
        
    putId;putTipus;putDescripcio;putnomcentre;values;errorBuit;finished;errorServer;errorId;
        

    constructor(private putPrestacioService: PutPrestacioService) { }
                            
        putPrestacio(){    /*          this.putCursService.putCurs(this.putid,this.putnom,this.putidcentre,this.putnomcentre)
                  .catch((error: any) => {               
               if (error.status === 0 || error.status === "0") {                   
                    this.errorServer=true;
                    }   
                else if (error.status === 400 || error.status === "400")
                    {
                        this.errorBuit = true; 
                    }
                else if (error.status === 500 || error.status === "500")
                    {
                        this.errorId = true; 
                    }
                else {                    
                   return error.json();                    
                }            
        }).subscribe(
          value => this.values=value,
          error => {},
          () => this.finished = true         
      );
        this.errorBuit=false;
        this.errorServer=false;
        this.finished=false;
        this.errorId=false;       */
     }    
}

                      
    