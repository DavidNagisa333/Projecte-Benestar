import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

import {OrganitzacionsModule} from './organitzacions/organitzacions.module';

import {ServeisModule} from './serveis/serveis.module';
import {PersonesModule} from './persones/persones.module';
import {OficinesModule} from './Oficines/oficines.module';


import { HomeComponent } from './home.component';

@NgModule({
  imports: [
<<<<<<< HEAD
    HomeRoutingModule,
          
=======
    HomeRoutingModule,    
>>>>>>> 5ac295b8ddcb7657e258789e0f76f53fe5ffbde8
    OrganitzacionsModule,
    ServeisModule,
    PersonesModule,
    OficinesModule
  ],
  declarations: [
      HomeComponent,
  ],
})

export class HomeModule { }
