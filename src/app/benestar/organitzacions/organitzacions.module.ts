import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganitzacionsRoutingModule } from './organitzacions-routing.module';
import { OrganitzacionsComponent } from './organitzacions.component';

@NgModule({
  imports: [
    CommonModule,
    OrganitzacionsRoutingModule
  ],
  declarations: [OrganitzacionsComponent]
})
export class OrganitzacionsModule { }
