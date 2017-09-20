import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';
<<<<<<< HEAD
=======

>>>>>>> 8c855bf628446bd308faa81991aa0af291e8093f
import { HomeComponent } from './home.component';

import { ServeisComponent } from './serveis/serveis.component';
import { OrganitzacionsComponent } from './organitzacions/organitzacions.component';
import { PersonesComponent, Ordre } from './persones/persones.component';
import { OficinesComponent } from './Oficines/oficines.component';

import {OrganitzacionsModule} from './organitzacions/organitzacions.module';
import { ServeisModule } from './serveis/serveis.module';
//import {ProvaComponent} from './organitzacions/prova/prova.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    NgxPaginationModule,
    OrganitzacionsModule
=======
    OrganitzacionsModule,
    ServeisModule
>>>>>>> 8c855bf628446bd308faa81991aa0af291e8093f
  ],
  declarations: [
      HomeComponent,
<<<<<<< HEAD
      JaumeCComponent,
      PersonesComponent,
      Ordre]
=======
      OficinesComponent]

>>>>>>> 8c855bf628446bd308faa81991aa0af291e8093f
})

export class HomeModule { }
