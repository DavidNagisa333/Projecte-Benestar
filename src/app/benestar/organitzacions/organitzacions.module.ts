import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganitzacionsRoutingModule } from './organitzacions-routing.module';
import { OrganitzacionsComponent } from './organitzacions.component';
import {ProvaComponent} from './prova/prova.component'

@NgModule({
  imports: [
    CommonModule,
    OrganitzacionsRoutingModule
  ],
  declarations: [OrganitzacionsComponent,
                ProvaComponent
                ]
})
export class OrganitzacionsModule { }
