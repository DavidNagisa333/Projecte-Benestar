import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {OrganitzacionsService} from './organitzacions.service';


     @Pipe({
  name: 'ordre'
})
export class Ordre implements PipeTransform{

  sortingOrder: String;

  transform(array: Array<any>, key: string, flag: boolean): Array<string> {

    key = key ? key : "id";
    flag = flag ? flag : false;

    // per ordenar el camp actual de manera inversa, han de coincidir i hem hagut de clicar una icona
    if(key == this.sortingOrder && flag == true)
      array.reverse();

    // per ordenar un camp diferent a l'actual
    else {
      this.sortingOrder = key;
      
      array.sort(function(a,b){
        switch(key){
          case 'id': if(a.id > b.id) return 1; if(a.id < b.id) return -1; return 0;
          case 'nom': if(a.nom > b.nom) return 1; if(a.nom < b.nom) return -1; return 0;
          //case 'cognoms': if(a.cognoms > b.cognoms) return 1; if(a.cognoms < b.cognoms) return -1; return 0;
          case 'correu': if(a.correu > b.correu) return 1; if(a.correu < b.correu) return -1; return 0;
          case 'telefon': if(a.telefon > b.telefon) return 1; if(a.telefon < b.telefon) return -1; return 0;
          case 'actiu': if(a.actiu > b.actiu) return 1; if(a.actiu < b.actiu) return -1; return 0;
          case 'direccio': if(a.direccio > b.direccio) return 1; if(a.direccio < b.direccio) return -1; return 0;
          case 'localitat': if(a.localitat > b.localitat) return 1; if(a.localitat < b.localitat) return -1; return 0;
          case 'tipus': if(a.tipus > b.tipus) return 1; if(a.tipus < b.tipus) return -1; return 0;
        }
      });
    }
    return array;
  }
}
@Component({
    selector: 'organitzacions',
    templateUrl: './organitzacions.component.html',
    providers: [OrganitzacionsService, Ordre]
})
export class OrganitzacionsComponent implements OnInit {

    pagedItems = [];   
    itemsPerPage: number = 5;
    currentPage: number = 1;
    addMode: boolean = false;
    numPages: number = 1;
    maxSize: number = 7;
    flag: boolean = true;

    constructor(private organitzacionsService: OrganitzacionsService,
                private ordre: Ordre) { }

     ngOnInit() {
      this.refreshData();
    }

   refreshData() {
      this.organitzacionsService
          .listOrganitzacio(this.itemsPerPage)
          .subscribe(
            data => {
              this.pagedItems = data.organitzacions;
              this.numPages = data.pagines;
            }
          );
    }

    // A F E G I R   U N A   P E R S O N A
    addOrganitzacio(item) {
      this.organitzacionsService
          .addOrganitzacio(item)
          .subscribe(data=> this.refreshData());
      this.addMode = false; 
    }

    // M O D I F I C A R   L E S   D A D E S   D ' U N A   P E R S O N A
    updateOrganitzacio(item) {
      //delete persona["editMode"];
      this.organitzacionsService
          .updateOrganitzacio(item)
          .subscribe(data=> this.refreshData());
    }

    // E S B O R R A R   U N A   P E R S O N A
    delOrganitzacio(item) {
      this.organitzacionsService
          .delOrganitzacio(item.id)
          .subscribe(data=> this.refreshData());
    }

    // switch del formulari modificar equipament
    editMode(item) {
      item.editMode = !item.editMode;
    }

    // switch del formulari afegir equipament
    toogleAddMode() {
      this.addMode = !this.addMode;
    }

    // al clicar una pàgina, aquesta serà la actual
    canvi(number: number) {
        this.currentPage = number;

        this.refreshData();
    }

    setPage2 = function () {
        if(isNaN(this.currentPage)){
            this.currentPage = 1
            return;
        } 
        this.refreshData();
    };

    // la funció es dispara al clicar en una icona, i enviem la variable flag per demostrar-ho
    sort_by(nouOrdre) {
      this.ordre.transform(this.pagedItems, nouOrdre, this.flag);
    }
















    /*
    //Funció que afageix una organització
    /*
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
