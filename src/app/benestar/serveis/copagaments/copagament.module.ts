import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServeisRoutingModule } from '../serveis-routing.module';
import { HomeRoutingModule } from '../../home-routing.module';
import { AppRoutingModule } from '../../../app-routing.module';
import { CopagamentRoutingModule } from './copagament-routing.module';

import { AddCopagamentComponent } from './addCopagament/addCopagament.component';
import { DelCopagamentComponent } from './delCopagament/delCopagament.component';
import { PutCopagamentComponent } from './putCopagament/putCopagament.component';
import { AllCopagamentComponent } from './allCopagament/allCopagament.component';
import { CopagamentComponent } from './copagament.component';

import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CopagamentRoutingModule,
      FormsModule
      
  ],
  declarations: [AddCopagamentComponent,
                 PutCopagamentComponent,
                 DelCopagamentComponent,
                 AllCopagamentComponent,
                 CopagamentComponent]
})
export class CopagamentModule { }
