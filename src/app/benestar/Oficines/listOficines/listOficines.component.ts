import {Component, OnInit} from '@angular/core';
import {OficinesService} from '../oficines.service';
import {ListOficinesService} from './listOficines.service';



@Component({
  selector: 'updateOficines',
  templateUrl:'./updateOficines.component.html',
  //styleUrls: ['../../.css'],
  providers: [ListOficinesService]
})

    export class UpdateOficinesComponent{
        
        id;codiPostal;provincia;poblacio;direccio;
        
        
 constructor(private updateOficinesService: ListOficinesService) { } 
        
     updateoficines(){}
}
