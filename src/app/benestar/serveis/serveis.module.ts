import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
//import { PrestacioComponent } from './prestacions/prestacio.component';
//import { PrestacioRoutingModule } from './prestacions/prestacio-routing.module';
import { HomeRoutingModule } from '../home-routing.module';
//import { AppRoutingModule } from '../../app-routing.module';
import { ServeisRoutingModule } from './serveis-routing.module';
import { ServeisComponent } from './serveis.component';
import { PrestacioModule } from './prestacions/prestacio.module';
import { CopagamentModule } from './copagaments/copagament.module';
import { ServeiSocialModule } from './serveisSocials/serveiSocial.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    ServeisRoutingModule,
    PrestacioModule,
    CopagamentModule,
    ServeiSocialModule,
<<<<<<< HEAD
    FormsModule,
    BrowserModule
=======
    FormsModule

>>>>>>> de6f48ebeaa01215b4d160054e191024e6a890cb
  ],
  declarations: [ServeisComponent,
               // PrestacioComponent
                ]
})
export class ServeisModule { }
