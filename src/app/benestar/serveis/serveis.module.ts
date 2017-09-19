import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PrestacioComponent } from './prestacions/prestacio.component';
import { PrestacioRoutingModule } from './prestacions/prestacio-routing.module';
import { HomeRoutingModule } from '../home-routing.module';
//import { AppRoutingModule } from '../../app-routing.module';
import { ServeisRoutingModule } from './serveis-routing.module';
import { ServeisComponent } from './serveis.component';
import { PrestacionsComponent } from './prestacions/prestacions.component';

@NgModule({
  imports: [
    CommonModule,
    ServeisRoutingModule,
    BrowserModule,
    FormsModule,s
    //PrestacioRoutingModule,
    //HomeRoutingModule,
    //AppRoutingModule,
      
  ],
  declarations: [PrestacioComponent,
                 ServeisComponent,
                 PrestacionsComponent]
})
export class ServeisModule { }
