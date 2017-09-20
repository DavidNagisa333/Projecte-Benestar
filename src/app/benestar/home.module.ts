import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';
<<<<<<< HEAD
=======

>>>>>>> 8c855bf628446bd308faa81991aa0af291e8093f
import { HomeComponent } from './home.component';

import { ServeisComponent } from './serveis/serveis.component';
import { OrganitzacionsComponent } from './organitzacions/organitzacions.component';
import { PersonesComponent, Ordre } from './persones/persones.component';
import { OficinesComponent } from './Oficines/oficines.component';

import {OrganitzacionsModule} from './organitzacions/organitzacions.module';
<<<<<<< HEAD
import {ProvaComponent} from './organitzacions/prova/prova.component';
import {ServeisModule} from './serveis/serveis.module';
=======
import { ServeisModule } from './serveis/serveis.module';
//import {ProvaComponent} from './organitzacions/prova/prova.component';

>>>>>>> ff9b9e627f89b94a0a40bc453bb0ea6eff0f2f95

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserModule,
    FormsModule,
    OrganitzacionsModule,
<<<<<<< HEAD
    OficinesComponent
  ],
  declarations: [
      ServeisComponent,
      HomeComponent,
      ]

=======
    ServeisModule
  ],
  declarations: [
      HomeComponent
  ]
>>>>>>> 7db833c8e2e39a2230a9a783da0524b64016ffb4
})

export class HomeModule { }
