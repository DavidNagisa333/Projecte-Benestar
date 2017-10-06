import {Component, OnInit} from '@angular/core';
import {OficinesService} from '../oficines.service';
import {ListOficinesService} from './listOficines.service';



@Component({
  selector: 'listOficines',
  templateUrl:'./listOficines.component.html',
  //styleUrls: ['../../.css'],
  providers: [ListOficinesService]
})

    export class ListOficinesComponent{
        
        id;codiPostal;provincia;poblacio;direccio;
        
        
 constructor(private listOficinesService: ListOficinesService) { } 
        
     //listoficines(){}
}