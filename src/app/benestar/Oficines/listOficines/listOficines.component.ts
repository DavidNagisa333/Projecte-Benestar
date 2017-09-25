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
        
        
<<<<<<< HEAD
 constructor(private listOficinesService: ListOficinesService) { } 
=======
<<<<<<< HEAD
 constructor(private listOficinesService: ListOficinesService) { } 
=======
 constructor(private updateOficinesService: ListOficinesService) { } 
>>>>>>> bc5e0972375ea6d01fd0b096ee4e6cae0c5fdd5b
>>>>>>> 7c7702756a631436a86142576dd1ccedd98c03b6
        
     listoficines(){}
}
