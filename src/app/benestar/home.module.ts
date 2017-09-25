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
>>>>>>> 676ecb2e399771eee801da8dce9d20627842da45
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
  ],
>>>>>>> 676ecb2e399771eee801da8dce9d20627842da45
})

export class HomeModule { }