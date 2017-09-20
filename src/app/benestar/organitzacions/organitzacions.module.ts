import { NgModule } from '@angular/core';

import { OrganitzacionsRoutingModule } from './organitzacions-routing.module';

import { OrganitzacionsComponent } from './organitzacions.component';
import {ProvaComponent} from './prova/prova.component'

@NgModule({
  imports: [
    OrganitzacionsRoutingModule
  ],
  declarations: [
  	OrganitzacionsComponent,
    ProvaComponent
    ]
})
export class OrganitzacionsModule { }
