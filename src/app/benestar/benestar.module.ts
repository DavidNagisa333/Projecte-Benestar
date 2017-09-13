import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenestarRoutingModule } from './benestar-routing.module';
import { BenestarComponent } from './benestar.component';
import { DavidComponent } from './david/david.component';
import { JaumeCComponent } from './jaume-c/jaume-c.component';

@NgModule({
  imports: [
    CommonModule,
    BenestarRoutingModule
  ],
  declarations: [BenestarComponent, DavidComponent, JaumeCComponent]
})
export class BenestarModule { }
