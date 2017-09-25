import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http';

import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeModule } from './benestar/home.module';
import { LoginComponent } from './login/login.component';

import { LoginService } from './login/login.service';




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
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }