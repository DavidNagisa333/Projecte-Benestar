import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import { PrestacioService } from './prestacio.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';

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
          case 'tipus': if(a.tipus > b.tipus) return 1; if(a.tipus < b.tipus) return -1; return 0;
          case 'cognoms': if(a.descripcio > b.descripcio) return 1; if(a.descripcio < b.descripcio) return -1; return 0;
        }
      });
    }
    return array;
  }
}
 
@Component({
    selector: 'app-prestacio',
    templateUrl: './prestacio.component.html',
    //styleUrls: ['../escola.css'],
    providers: [PrestacioService,
               Ordre]
})


export class PrestacioComponent implements OnInit {

    pagedItems = [];
  	item = {};
  	itemsPerPage: number = 5;
    currentPage: number = 1;
  	addMode: boolean = false;
  	numPages: number = 1;
    maxSize: number = 7;
    flag: boolean = true;
    addTipus; addDescripcio

    constructor(private prestacioService: PrestacioService, private ordre:Ordre) { }

  ngOnInit() {
      this.refreshData();
  }


refreshData() {
  		this.prestacioService
          .allPrestacio(this.itemsPerPage)
          .subscribe(
            data => {
              this.pagedItems = data.prestacions;
              this.numPages = data.pagines;
            }
          );
  	}

  	// A F E G I R   U N A   P E R S O N A
  	addPrestacio(prestacio) {
  		this.prestacioService
            .addPrestacio(prestacio)
          .subscribe(data=> this.refreshData());

      this.addMode = false; 
  	}

    putPrestacio(prestacio) {
      //delete persona["editMode"];
  		this.prestacioService
          .putPrestacio(prestacio)
          .subscribe(data=> this.refreshData());
  	}

  	// E S B O R R A R   U N A   P E R S O N A
  	delPrestacio(prestacio) {
  		this.prestacioService
  			  .delPrestacio(prestacio)
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
}
