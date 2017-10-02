import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OficinesRoutingModule } from './oficines-routing.module';
import { OficinesComponent } from './oficines.component';

@NgModule({
  imports: [
    CommonModule,
    OficinesRoutingModule
  ],
  declarations: [OficinesComponent]
})
export class OficinesModule { }