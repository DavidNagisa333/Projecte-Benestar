import {Component, OnInit} from '@angular/core';
import {OficinesService} from '../oficines.service';
import {UpdateOficinesService} from './updateOficines.service';



@Component({
  selector: 'listOficines',
  templateUrl:'./listOficines.component.html',
  //styleUrls: ['../../.css'],
  providers: [UpdateOficinesService]
})

    export class ListOficinesComponent{
        
        id;codiPostal;provincia;poblacio;direccio;
        
        
 constructor(private listOficinesService: UpdateOficinesService) { } 
        
     listoficines(){}
}
