import { NgModule } from '@angular/core';


import { HomeRoutingModule } from './home-routing.module';

import {OrganitzacionsModule} from './organitzacions/organitzacions.module';

import {ServeisModule} from './serveis/serveis.module';
import {PersonesModule} from './persones/persones.module';
import {OficinesModule} from './Oficines/oficines.module';

import { HomeComponent } from './home.component';

@NgModule({
<<<<<<< HEAD
  imports: [
    HomeRoutingModule,

    OrganitzacionsModule,
    ServeisModule,
    PersonesModule,
    OficinesModule
  ],
  declarations: [
      HomeComponent,
  ],
=======
 imports: [
   HomeRoutingModule,    
   OrganitzacionsModule,
   ServeisModule,
   PersonesModule,
   OficinesModule
 ],
 declarations: [
     HomeComponent,
 ],
>>>>>>> 2d291f63c22b1b2401f4113765914fe834699830
})

export class HomeModule { }