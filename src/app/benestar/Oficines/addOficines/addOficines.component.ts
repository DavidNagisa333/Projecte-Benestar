import {Component, OnInit} from '@angular/core';
import {OficinesService} from '../oficines.service';
import {AddOficinesService} from './addOficines.service';



@Component({
  selector: 'addOficines',
  templateUrl:'./addOficines.component.html',
  //styleUrls: ['../../.css'],
  providers: [AddOficinesService]
})

    export class AddOficinesComponent{
        
        id;codiPostal;provincia;poblacio;direccio;
        
        
 constructor(private addOficinesService: AddOficinesService) { } 
        
     addoficines(){}
 }