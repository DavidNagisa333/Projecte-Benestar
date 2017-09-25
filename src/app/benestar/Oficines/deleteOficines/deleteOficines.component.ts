import {Component, OnInit} from '@angular/core';
import {OficinesService} from '../oficines.service';
import {DeleteOficinesService} from './deleteOficines.service';



@Component({
  selector: 'deleteOficines',
  templateUrl:'./deleteOficines.component.html',
  //styleUrls: ['../../.css'],
  providers: [DeleteOficinesService]
})

    export class DeleteOficinesComponent{
        
        id;
             
 constructor(private deleteOficinesService: DeleteOficinesService) { } 
        
     deleteoficines(oficina){
}
 }