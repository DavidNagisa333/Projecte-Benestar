import { NgModule } from '@angular/core';


import { HomeRoutingModule } from './home-routing.module';

import {OrganitzacionsModule} from './organitzacions/organitzacions.module';

import {ServeisModule} from './serveis/serveis.module';
import {PersonesModule} from './persones/persones.module';
import {OficinesModule} from './Oficines/oficines.module';


import { HomeComponent } from './home.component';

@NgModule({
<<<<<<< HEAD
=======

>>>>>>> 24e20f9daad038557b63940aed2e9839a96bab27
  imports: [
    HomeRoutingModule,
    OrganitzacionsModule,
    ServeisModule,
    PersonesModule,
    OficinesModule
  ],
  declarations: [
      HomeComponent,
<<<<<<< HEAD
     ]
=======
  ]
>>>>>>> 24e20f9daad038557b63940aed2e9839a96bab27
})

export class HomeModule { }