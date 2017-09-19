import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';

<<<<<<< HEAD
=======
import { HomeComponent } from './home.component';

>>>>>>> d3ecd05f598070ad9ab40923dd0d05fa29950d20
import { ServeisComponent } from './serveis/serveis.component';
import { OrganitzacionsComponent } from './organitzacions/organitzacions.component';
import { PersonesComponent, Ordre } from './persones/persones.component';
import { JaumeCComponent } from './jaume-c/jaume-c.component';
import {OrganitzacionsModule} from './organitzacions/organitzacions.module';
import {ProvaComponent} from './organitzacions/prova/prova.component';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    AppRoutingModule,
    NgxPaginationModule
=======
    OrganitzacionsModule
>>>>>>> d3ecd05f598070ad9ab40923dd0d05fa29950d20
  ],
  declarations: [
      ServeisComponent,
      HomeComponent,
      JaumeCComponent,
<<<<<<< HEAD
      OrganitzacionsComponent,
      PersonesComponent,
      Ordre]
=======
      JaumeMGComponent]
>>>>>>> d3ecd05f598070ad9ab40923dd0d05fa29950d20
})
<<<<<<< HEAD
=======

>>>>>>> f6cce1a5de1423736a7a86b9ce47ceb90dfb4f6b

export class HomeModule { }
