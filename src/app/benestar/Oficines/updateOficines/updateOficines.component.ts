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
        
        
<<<<<<< HEAD
 constructor(private updateOficinesService: UpdateOficinesService) { } 
=======
<<<<<<< HEAD
 constructor(private updateOficinesService: UpdateOficinesService) { } 
=======
 constructor(private listOficinesService: UpdateOficinesService) { } 
>>>>>>> bc5e0972375ea6d01fd0b096ee4e6cae0c5fdd5b
>>>>>>> 7c7702756a631436a86142576dd1ccedd98c03b6
        
     updateoficines(){}
}
