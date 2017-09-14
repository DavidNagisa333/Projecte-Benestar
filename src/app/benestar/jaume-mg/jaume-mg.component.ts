import { Component, OnInit } from '@angular/core';
import { JaumeMGService } from './jaume-mg.service';

@Component({
  selector: 'app-jaume-mg',
  templateUrl: './jaume-mg.component.html',
  styleUrls: ['./jaume-mg.component.css'],
  providers: [ JaumeMGService ]
})
export class JaumeMGComponent implements OnInit {

	nom: string;
	cognoms: string;
	naixement: Date;
	correu: string;
	telefon: string;
	mobil: string;
	adreca: string;
	localitat: string;
	comarca: string;

  	constructor(private personaService: JaumeMGService) { }

  	ngOnInit() { }

  	addPersona() {
  		
  	}
}
