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
<<<<<<< HEAD
      
=======
    PrestacioModule,
    CopagamentModule,
    ServeiSocialModule,
       FormsModule
>>>>>>> ff9b9e627f89b94a0a40bc453bb0ea6eff0f2f95
  ],
  declarations: [ServeisComponent,
               // PrestacioComponent
                ]
})
<<<<<<< HEAD
export class ServeisModule { }
=======

export class ServeisModule { }
>>>>>>> ff9b9e627f89b94a0a40bc453bb0ea6eff0f2f95
