import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

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
    NgxPaginationModule,
    OrganitzacionsModule
  ],
  declarations: [
      ServeisComponent,
      HomeComponent,
      JaumeCComponent,
      PersonesComponent,
      Ordre]
})

export class HomeModule { }
