import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import { BenestarRoutingModule } from './benestar-routing.module';
import { BenestarComponent } from './benestar.component';

<<<<<<< HEAD
import { ServeisComponent } from './serveis/serveis.component';
import { SergiComponent } from './sergi/sergi.component';
=======
import { DavidComponent } from './david/david.component';
import { OrganitzacionsComponent } from './organitzacions/organitzacions.component';
>>>>>>> c94213f59440cc7579e7174ef6c9976c829ca5b4
import { JaumeMGComponent } from './jaume-mg/jaume-mg.component';
import { JaumeCComponent } from './jaume-c/jaume-c.component';

@NgModule({
  imports: [
    CommonModule,
    BenestarRoutingModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
      BenestarComponent,
      ServeisComponent,
      JaumeCComponent,
      OrganitzacionsComponent,
      JaumeMGComponent]
})
export class BenestarModule { }
