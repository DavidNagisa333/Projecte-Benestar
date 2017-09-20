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

@NgModule({
  imports: [
    CommonModule,
    ServeisRoutingModule,
    PrestacioModule,
    CopagamentModule,
    ServeiSocialModule,
    FormsModule
<<<<<<< HEAD
=======

>>>>>>> 363d459a32b04c4553fd695ae928ff3848e5e2c8
  ],
  declarations: [ServeisComponent,
               // PrestacioComponent
                ]
})
export class ServeisModule { }
