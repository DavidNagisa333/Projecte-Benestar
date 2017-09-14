import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


import { ServeisComponent } from './serveis/serveis.component';
import { OrganitzacionsComponent } from './organitzacions/organitzacions.component';
import { JaumeMGComponent } from './jaume-mg/jaume-mg.component';
import { JaumeCComponent } from './jaume-c/jaume-c.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
<<<<<<< HEAD:src/app/benestar/benestar.module.ts
      BenestarComponent,
      ServeisComponent,
=======
      HomeComponent,
      DavidComponent,
>>>>>>> 9d8405588978537ed9c6718921aef4b2086d0b21:src/app/benestar/home.module.ts
      JaumeCComponent,
      OrganitzacionsComponent,
      JaumeMGComponent]
})
<<<<<<< HEAD:src/app/benestar/benestar.module.ts
export class BenestarModule { }
=======
export class HomeModule { }


/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';
import { Component, OnInit } from '@angular/core';


import { DavidComponent } from './david/david.component';*/
>>>>>>> 9d8405588978537ed9c6718921aef4b2086d0b21:src/app/benestar/home.module.ts
