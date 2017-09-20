import { Component, OnInit } from '@angular/core';
import {OrganitzacionsService} from './organitzacions.service';

@Component({
    selector: 'organitzacions',
    templateUrl: './organitzacions.component.html',
    providers: [OrganitzacionsService]
})
export class OrganitzacionsComponent implements OnInit {
     id;nom;telefon;errorServer;errorBuit;finished;values;data;alumnes

    constructor(private organitzacionsService: OrganitzacionsService) { }

    ngOnInit() {
    }
    /*
    //Funció que afageix una organització
    
    addOrganitzacio(){        this.organitzacionsService.addOrganitzacio(this.id,this.nom,this.telefon)
               .catch((error: any) => {               
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
     } 
    
    //Funció que esborra una organització
    
    delOrganitzacio(){  
            this.organitzacionsService.delOrganitzacio(this.id) 
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
                   return error.json();                    
                }            
        }).subscribe(
          value => this.data=value,
          error => {},
          () => this.finished = true
      );        
        this.errorServer=false;
        this.errorBuit=false;
        this.finished=false;  
     }
    
    //Funció que llista totes les organitzacions
    
    listOrganitzacio(){
     this.organitzacionsService.listOrganitzacio()
                .subscribe(
                data => this.alumnes = data,
                err => console.error(err))
         
    } */
        
}
