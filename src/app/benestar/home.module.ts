import { NgModule } from '@angular/core';


import { HomeRoutingModule } from './home-routing.module';

import {OrganitzacionsModule} from './organitzacions/organitzacions.module';
import {ServeisModule} from './serveis/serveis.module';
import {PersonesModule} from './persones/persones.module';
import {OficinesModule} from './oficines/oficines.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    HomeRoutingModule,
      
    OrganitzacionsModule,
<<<<<<< HEAD
<<<<<<< HEAD
    OficinesComponent
  ],
  declarations: [
      ServeisComponent,
      HomeComponent,
      ]

=======
    ServeisModule
=======
    ServeisModule,
    PersonesModule,
    OficinesModule
>>>>>>> db7a0a52bb22dd52348b2592afce83c8c99dc07d
  ],
  declarations: [
      HomeComponent
  ]
>>>>>>> 7db833c8e2e39a2230a9a783da0524b64016ffb4
})

export class HomeModule { }
