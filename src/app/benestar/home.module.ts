import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { DavidComponent } from './david/david.component';
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
      HomeComponent,
      DavidComponent,
      JaumeCComponent,
      OrganitzacionsComponent,
      JaumeMGComponent]
})
export class HomeModule { }