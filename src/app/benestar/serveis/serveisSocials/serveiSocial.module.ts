import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServeisRoutingModule } from '../serveis-routing.module';
import { HomeRoutingModule } from '../../home-routing.module';
import { AppRoutingModule } from '../../../app-routing.module';
import { ServeiSocialRoutingModule } from './serveiSocial-routing.module';

import { AddServeiSocialComponent } from './addServeiSocial/addServeiSocial.component';
import { DelServeiSocialComponent } from './delServeiSocial/delServeiSocial.component';
import { PutServeiSocialComponent } from './putServeiSocial/putServeiSocial.component';
import { AllServeiSocialComponent } from './allServeiSocial/allServeiSocial.component';
import { ServeiSocialComponent } from './serveiSocial.component';

@NgModule({
  imports: [
    CommonModule,
    ServeiSocialRoutingModule
  ],
  declarations: [AddServeiSocialComponent,
                 PutServeiSocialComponent,
                 DelServeiSocialComponent,
                 AllServeiSocialComponent,
                 ServeiSocialComponent]
})
export class ServeiSocialModule { }
