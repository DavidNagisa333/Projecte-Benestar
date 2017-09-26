import { NgModule } from '@angular/core';

import { OrganitzacionsRoutingModule } from './organitzacions-routing.module';

import { OrganitzacionsComponent,Ordre } from './organitzacions.component';
import {ProvaComponent} from './prova/prova.component'
import { NgxPaginationModule } from 'ngx-pagination'
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
<<<<<<< HEAD
=======

>>>>>>> 24e20f9daad038557b63940aed2e9839a96bab27


@NgModule({
  imports: [
    OrganitzacionsRoutingModule,
    NgxPaginationModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [
  	OrganitzacionsComponent,
    ProvaComponent,
    Ordre
    ]
    
})
export class OrganitzacionsModule { }
