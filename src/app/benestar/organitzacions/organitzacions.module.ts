import { NgModule } from '@angular/core';

import { OrganitzacionsComponent,Ordre } from './organitzacions.component';
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
  	OrganitzacionsComponent,
    Ordre
    ]
    
})
export class OrganitzacionsModule { }
