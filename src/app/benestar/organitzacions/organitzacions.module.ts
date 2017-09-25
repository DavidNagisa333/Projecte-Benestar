import { NgModule } from '@angular/core';

import { OrganitzacionsRoutingModule } from './organitzacions-routing.module';

import { OrganitzacionsComponent,Ordre } from './organitzacions.component';
import {ProvaComponent} from './prova/prova.component'
import { NgxPaginationModule } from 'ngx-pagination'
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
<<<<<<< HEAD
=======
//import { AuthHttp, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';
>>>>>>> 7c7702756a631436a86142576dd1ccedd98c03b6



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
