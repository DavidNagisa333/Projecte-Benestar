import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import { BenestarRoutingModule } from './benestar-routing.module';
import { BenestarComponent } from './benestar.component';

import { DavidComponent } from './david/david.component';
import { SergiComponent } from './sergi/sergi.component';
import { JaumeMGComponent } from './jaume-mg/jaume-mg.component';
import { JaumeCComponent } from './jaume-c/jaume-c.component';

@NgModule({
  imports: [
    CommonModule,
    BenestarRoutingModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
      BenestarComponent,
      DavidComponent,
      JaumeCComponent,
      SergiComponent,
      JaumeMGComponent]
})
export class BenestarModule { }


/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';
import { Component, OnInit } from '@angular/core';


import { DavidComponent } from './david/david.component';*/