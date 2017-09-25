import { Component, OnInit } from '@angular/core';
import {OficinesService} from './oficines.service';

@Component({
  selector: 'oficines',
  templateUrl: './oficines.component.html'
})
export class OficinesComponent implements OnInit {
	id;codiPostal;provincia;poblacio;direccio;

  constructor(private oficinesService: OficinesService) { }

  ngOnInit() {
  }

}
