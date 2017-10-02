import {Component, OnInit} from '@angular/core';
import {OficinesService} from '../oficines.service';
import {UpdateOficinesService} from './updateOficines.service';



@Component({
  selector: 'updateOficines',
  templateUrl:'./updateOficines.component.html',
  //styleUrls: ['../../.css'],
  providers: [UpdateOficinesService]
})

    export class UpdateOficinesComponent{
        
        id;codiPostal;provincia;poblacio;direccio;
        
        

 constructor(private updateOficinesService: UpdateOficinesService) { } 

        
   //  updateoficines(){}
}
