import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServeisRoutingModule } from '../serveis-routing.module';
import { HomeRoutingModule } from '../../home-routing.module';
import { AppRoutingModule } from '../../../app-routing.module';
import { PrestacioRoutingModule } from './prestacio-routing.module';
/*
import { AddPrestacioComponent } from './addPrestacio/addPrestacio.component';
import { DelPrestacioComponent } from './delPrestacio/delPrestacio.component';
import { PutPrestacioComponent } from './putPrestacio/putPrestacio.component';
import { AllPrestacioComponent } from './allPrestacio/allPrestacio.component';*/
import { Ordre, PrestacioComponent } from './prestacio.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PrestacioRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  declarations: [/*AddPrestacioComponent,
                 PutPrestacioComponent,
                 DelPrestacioComponent,
                 AllPrestacioComponent,*/
                 PrestacioComponent,
                 Ordre]
})
export class PrestacioModule { }
