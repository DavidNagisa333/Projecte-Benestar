import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SergiRoutingModule } from './sergi-routing.module';
import { SergiComponent } from './sergi.component';

@NgModule({
  imports: [
    CommonModule,
    SergiRoutingModule
  ],
  declarations: [SergiComponent]
})
export class SergiModule { }
