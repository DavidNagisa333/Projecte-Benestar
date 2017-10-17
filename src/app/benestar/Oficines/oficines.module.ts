import { NgModule } from '@angular/core';

import { OficinesComponent,Ordre } from './oficines.component';
import { NgxPaginationModule } from 'ngx-pagination'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    NgxPaginationModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [
  	OficinesComponent,
    Ordre
    ]
    
})
export class OficinesModule { }
