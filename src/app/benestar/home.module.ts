import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

import { ServeisComponent } from './serveis/serveis.component';
import { OrganitzacionsComponent } from './organitzacions/organitzacions.component';
import { JaumeMGComponent } from './jaume-mg/jaume-mg.component';
import { JaumeCComponent } from './jaume-c/jaume-c.component';
import {OrganitzacionsModule} from './organitzacions/organitzacions.module';
import {ProvaComponent} from './organitzacions/prova/prova.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserModule,
    FormsModule,
    OrganitzacionsModule
  ],
  declarations: [
      ServeisComponent,
      HomeComponent,
      JaumeCComponent,
      JaumeMGComponent]
})
<<<<<<< HEAD
export class HomeModule { }

=======
<<<<<<< HEAD
=======

>>>>>>> f6cce1a5de1423736a7a86b9ce47ceb90dfb4f6b

export class HomeModule { }
>>>>>>> d3ecd05f598070ad9ab40923dd0d05fa29950d20
