import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JaumeMGRoutingModule } from './jaume-mg-routing.module';
import { JaumeMGComponent } from './jaume-mg.component';

@NgModule({
  imports: [
    CommonModule,
    JaumeMGRoutingModule
  ],
  declarations: [JaumeMGComponent]
})
export class JaumeMGModule { }
