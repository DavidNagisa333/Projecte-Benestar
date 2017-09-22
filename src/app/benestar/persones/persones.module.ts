import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

//import { PersonesRoutingModule } from './persones-routing.module';
import { Ordre, PersonesComponent } from './persones.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [PersonesComponent, Ordre]

})
export class PersonesModule { }
