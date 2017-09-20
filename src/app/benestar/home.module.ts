import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

//import { ServeisComponent } from './serveis/serveis.component';
//import { OrganitzacionsComponent } from './organitzacions/organitzacions.component';
import { PersonesComponent, Ordre } from './persones/persones.component';

//import { OficinesComponent } from './Oficines/oficines.component';

import { OrganitzacionsModule } from './organitzacions/organitzacions.module';
import { ServeisModule } from './serveis/serveis.module';
import { PersonesModule } from './persones/persones.module';
import { OficinesModule } from './Oficines/oficines.module';
//import {ProvaComponent} from './organitzacions/prova/prova.component';
=======

import { HomeRoutingModule } from './home-routing.module';

import {OrganitzacionsModule} from './organitzacions/organitzacions.module';

import {ServeisModule} from './serveis/serveis.module';
import {PersonesModule} from './persones/persones.module';
import {OficinesModule} from './Oficines/oficines.module';

>>>>>>> de6f48ebeaa01215b4d160054e191024e6a890cb

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
<<<<<<< HEAD
    CommonModule,
    HomeRoutingModule,
//<<<<<<< HEAD
//    NgxPaginationModule,
    OrganitzacionsModule,
//=======
//    OrganitzacionsModule,
    ServeisModule,
    PersonesModule,
    OficinesModule
//>>>>>>> 8c855bf628446bd308faa81991aa0af291e8093f
  ],
  declarations: [
      HomeComponent//, PersonesComponent, Ordre
//<<<<<<< HEAD
//      JaumeCComponent,
//      PersonesComponent,
//      Ordre
]
//=======
//      OficinesComponent]

//>>>>>>> 8c855bf628446bd308faa81991aa0af291e8093f
=======
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
>>>>>>> de6f48ebeaa01215b4d160054e191024e6a890cb
})

export class HomeModule { }
