import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
<<<<<<< HEAD

//import { OrganitzacionsComponent } from './organitzacions/organitzacions.component';
import { JaumeMGComponent } from './jaume-mg/jaume-mg.component';
import { JaumeCComponent } from './jaume-c/jaume-c.component';
=======
import { ServeisComponent } from './serveis/serveis.component';
import { OrganitzacionsComponent } from './organitzacions/organitzacions.component';
import { PersonesComponent, Ordre } from './persones/persones.component';
import { OficinesComponent } from './Oficines/oficines.component';
>>>>>>> 46a63b550bef7e9e6228098a75b53317f058cb9b
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
      OficinesComponent]

})
<<<<<<< HEAD
=======

>>>>>>> 46a63b550bef7e9e6228098a75b53317f058cb9b

export class HomeModule { }
