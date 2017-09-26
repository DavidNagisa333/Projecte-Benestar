import { NgModule } from '@angular/core';

import { OrganitzacionsRoutingModule } from './organitzacions-routing.module';

import { OrganitzacionsComponent,Ordre } from './organitzacions.component';
import {ProvaComponent} from './prova/prova.component'
import { NgxPaginationModule } from 'ngx-pagination'
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  imports: [
    OrganitzacionsRoutingModule,
    NgxPaginationModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [
  	OrganitzacionsComponent,
    ProvaComponent,
    Ordre
    ]
    
})
export class OrganitzacionsModule { }
