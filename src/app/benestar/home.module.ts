import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

//import { OrganitzacionsComponent } from './organitzacions/organitzacions.component';
import { JaumeMGComponent } from './jaume-mg/jaume-mg.component';
import { JaumeCComponent } from './jaume-c/jaume-c.component';
import {OrganitzacionsModule} from './organitzacions/organitzacions.module';
import { ServeisModule } from './serveis/serveis.module';
//import {ProvaComponent} from './organitzacions/prova/prova.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserModule,
    FormsModule,
    OrganitzacionsModule,
    ServeisModule
  ],
  declarations: [
      HomeComponent,
      JaumeCComponent,
      JaumeMGComponent]
})

export class HomeModule { }
