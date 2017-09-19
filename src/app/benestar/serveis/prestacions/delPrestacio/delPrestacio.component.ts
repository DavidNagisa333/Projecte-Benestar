import {Component, OnInit,ViewChild} from '@angular/core';
import {DelPrestacioService} from './delPrestacio.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';
//import {deleteModelComponent} from '../../model/delete-model/deleteModel.component';
//import {deleteModelService} from'../../model/delete-model/deleteModel.service';

@Component({
  selector: 'delPrestacio',
  templateUrl:'./delPrestacio.component.html',
  //styleUrls: ['../../escola.css'],
  providers: [DelPrestacioService,/*deleteModelComponent,deleteModelService*/]
})

    export class DelPrestacioComponent{
        
        delId;data;logError;marques;errorBuit;errorServer;finished;
        //finished=true;
    constructor(private delPrestacioService: DelPrestacioService) { }
        
    // @ViewChild(deleteModelComponent) deleteModelcomponent;

        delPrestacio(){  /*
            this.delCursService.delCurs(this.delid) 
            .catch((error: any) => { 
                console.log(error.status);
               if (error.status === 0 || error.status === "0") {
                   console.log("Servidor Parat"); 
                    this.errorServer=true;
                   
                    }   
                else if (error.status === 400 || error.status === "400")
                    {                        
                        this.errorBuit = true; 
                       
                    }
                else if (error.status === 500 || error.status === "500")
                    {
                        this.errorBuit = true; 
                       
                    }
                else {
                   this.finished=true;
                   return error.json();  
                }
                     
        }).subscribe(
          value => this.data=value,
          error => {}         
      );        
        this.errorServer=false;
        this.errorBuit=false;
        this.finished=false;  */
     }    
}