import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddServeiSocialComponent } from './addServeiSocial/addServeiSocial.component';
import { DelServeiSocialComponent } from './delServeiSocial/delServeiSocial.component';
import { PutServeiSocialComponent } from './putServeiSocial/putServeiSocial.component';
import { AllServeiSocialComponent } from './allServeiSocial/allServeiSocial.component';

const routes: Routes = [
      {
    path: 'addServeiSocial',
    component: AddServeiSocialComponent,
    children: []
    },
      {
    path: 'delServeiSocial',
    component: DelServeiSocialComponent,
    children: []
    },
      {
    path: 'putServeiSocial',
    component: PutServeiSocialComponent,
    children: []
    },
      {
    path: 'allServeiSocial',
    component: AllServeiSocialComponent,
    children: []
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServeiSocialRoutingModule { }
