import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {OficinesService} from './oficines.service';


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
          case 'codiPostal': if(a.codiPostal > b.codiPostal) return 1; if(a.codiPostal < b.codiPostal) return -1; return 0;
          case 'provincia': if(a.provincia > b.provincia) return 1; if(a.provincia < b.provincia) return -1; return 0;
          case 'poblacio': if(a.poblacio > b.poblacio) return 1; if(a.poblacio < b.poblacio) return -1; return 0;
          case 'direccio': if(a.direccio > b.direccio) return 1; if(a.direccio < b.direccio) return -1; return 0;
        }
      });
    }
    return array;
  }
}
@Component({
    selector: 'oficines',
    templateUrl: './oficines.component.html',
    providers: [OficinesService, Ordre]
})
export class OficinesComponent implements OnInit {

    pagedItems = [];   
    item = {};
    itemsPerPage: number = 5;
    currentPage: number = 1;
    addMode: boolean = false;
    numPages: number = 1;
    maxSize: number = 7;
    flag: boolean = true;

    constructor(private oficinesService: OficinesService,
                private ordre: Ordre) { }

     ngOnInit() {
      this.refreshData();
    }

   refreshData() {
      this.oficinesService
          .listOficina(this.itemsPerPage)
          .subscribe(
            data => {
              this.pagedItems = data.oficines;
              this.numPages = data.pagines;
            }
          );
    }

    // A F E G I R   U N A   O R G A N I T Z A C I O
    addOficina(item) {
      this.oficinesService
          .addOficina(item)
          .subscribe(data=> this.refreshData());
      this.addMode = false; 
    }

    // M O D I F I C A R   L E S   D A D E S   D ' U N A   O R G A N I T Z A C I O
    updateOficina(item) {
      this.oficinesService
          .updateOficina(item)
          .subscribe(data=> this.refreshData());
    }

    // E S B O R R A R   U N A   O R G A N I T Z A C I O
    delOficina(item) {
      this.oficinesService
          .delOficina(item.id)
          .subscribe(data=> this.refreshData());
    }

    // switch del formulari modificar oficines
    editMode(item) {
      item.editMode = !item.editMode;
    }

    // switch del formulari afegir oficines
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
}