import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { PersonesService } from './persones.service';

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
          case 'cognoms': if(a.cognoms > b.cognoms) return 1; if(a.cognoms < b.cognoms) return -1; return 0;
          case 'correu': if(a.correu > b.correu) return 1; if(a.correu < b.correu) return -1; return 0;
          case 'telefon': if(a.telefon > b.telefon) return 1; if(a.telefon < b.telefon) return -1; return 0;
          case 'mobil': if(a.mobil > b.mobil) return 1; if(a.mobil < b.mobil) return -1; return 0;
          case 'adreca': if(a.adreca > b.adreca) return 1; if(a.adreca < b.adreca) return -1; return 0;
          case 'localitat': if(a.localitat > b.localitat) return 1; if(a.localitat < b.localitat) return -1; return 0;
          case 'comarca': if(a.comarca > b.comarca) return 1; if(a.comarca < b.comarca) return -1; return 0;
        }
      });
    }

    return array;
  }
}
@Component({
  selector: 'app-persones',
  templateUrl: './persones.component.html',
  providers: [ PersonesService, Ordre ]
})
export class PersonesComponent implements OnInit {

    pagedItems = [];
  	item = {};
  	itemsPerPage: number = 5;
    currentPage: number = 1;
  	addMode: boolean = false;
  	numPages: number = 1;
    maxSize: number = 7;
    flag: boolean = true;
    query: String = "";

    constructor(private personaService: PersonesService, private ordre: Ordre) { }

	  ngOnInit() {
		  this.refreshData();
	  }

   refreshData() {
  		this.personaService
          .llistarPersones(this.itemsPerPage, this.query)
          .subscribe(
            data => {
              this.pagedItems = data.persones;
              this.numPages = data.pagines;
            }
          );
  	}

  	// A F E G I R   U N A   P E R S O N A
  	afegirPersona(persona) {
  		this.personaService
          .afegirPersona(persona)
          .subscribe(data=> this.refreshData());

      this.addMode = false; 
  	}

    // M O D I F I C A R   L E S   D A D E S   D ' U N A   P E R S O N A
  	modPersona(persona) {
      //delete persona["editMode"];
  		this.personaService
          .modPersona(persona)
          .subscribe(data=> this.refreshData());
  	}

  	// E S B O R R A R   U N A   P E R S O N A
  	esborrarPersona(persona) {
  		this.personaService
  			  .esborrarPersona(persona)
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