import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

import { ServeisComponent } from './serveis/serveis.component';
import { OrganitzacionsComponent } from './organitzacions/organitzacions.component';
import { PersonesComponent, Ordre } from './persones/persones.component';
import { OficinesComponent } from './Oficines/oficines.component';

import {OrganitzacionsModule} from './organitzacions/organitzacions.module';
import { ServeisModule } from './serveis/serveis.module';
import { PersonesModule } from './persones/persones.module';
//import {ProvaComponent} from './organitzacions/prova/prova.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserModule,
    FormsModule,
    OrganitzacionsModule,
    ServeisModule,
    PersonesModule
  ],
  declarations: [
      HomeComponent,
      ]

})

export class HomeModule { }
