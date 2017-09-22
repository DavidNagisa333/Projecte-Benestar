import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http';


import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import { HomeModule } from './benestar/home.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  imports: [
    AppRoutingModule,
    HomeModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
