import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServeisRoutingModule } from '../serveis-routing.module';
import { HomeRoutingModule } from '../../home-routing.module';
import { AppRoutingModule } from '../../../app-routing.module';
import { PrestacioRoutingModule } from './prestacio-routing.module';

import { AddPrestacioComponent } from './addPrestacio/addPrestacio.component';
import { DelPrestacioComponent } from './delPrestacio/delPrestacio.component';
import { PutPrestacioComponent } from './putPrestacio/putPrestacio.component';
import { AllPrestacioComponent } from './allPrestacio/allPrestacio.component';
//import { PrestacioComponent } from './Prestacio.component';

@NgModule({
  imports: [
    CommonModule,
    ServeisRoutingModule,
    HomeRoutingModule,
    AppRoutingModule,
    PrestacioRoutingModule
  ],
  declarations: [AddPrestacioComponent,
                 PutPrestacioComponent,
                 DelPrestacioComponent,
                 AllPrestacioComponent,]
                 //PrestacioComponent]
})
export class ServeisModule { }
