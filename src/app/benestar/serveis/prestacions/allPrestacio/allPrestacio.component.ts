import {Component, OnInit} from '@angular/core';
import {AllPrestacioService} from './allPrestacio.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';
//import {FilterPipe} from '../../../filter.pipe';

@Component({
  selector: 'allPrestacio',
  templateUrl:'./allPrestacio.component.html',
  //styleUrls: ['../../escola.css'],
  providers: [AllPrestacioService],
    //pipes:[FilterPipe]
})

    export class AllPrestacioComponent{

    constructor(private allPrestacioService: AllPrestacioService) { }
        cursos; prova; cursId; id; errorBuit;finished;errorServer;lng;

        
    allPrestacio(){/*
        this.listPrestacioService.listPrestacio()
            .subscribe(
            data => {
                this.cursos = data;
                console.log(data);
                console.log(this.cursos);
        this.lng=this.cursos[0].aula.length;
        console.log(this.lng);            
                
            }
            
            
           // (this.cursos = data, console.log(data)),//
                    
      ); 
        
    }
        
         provaphp(){
        this.listCursService.provaphp()
            .subscribe(
            data => (this.prova = data, console.log(data))
                    
      );    */
    }
           /* 
        getCursId(){
            this.listCursService.getCursId(this.id)
                .subscribe(
                data => { this.cursId = data;console.log(this.cursId);},
                err => console.error(err),
                () => console.log('done')
      );}*/
    }