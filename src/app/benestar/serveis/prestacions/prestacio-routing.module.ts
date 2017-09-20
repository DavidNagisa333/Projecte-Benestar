import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPrestacioComponent } from './addPrestacio/addPrestacio.component';
import { DelPrestacioComponent } from './delPrestacio/delPrestacio.component';
import { PutPrestacioComponent } from './putPrestacio/putPrestacio.component';
import { AllPrestacioComponent } from './allPrestacio/allPrestacio.component';

const routes: Routes = [
      {
    path: 'addPrestacio',
    component: AddPrestacioComponent,
    children: []
    },
      {
    path: 'delPrestacio',
    component: DelPrestacioComponent,
    children: []
    },
      {
    path: 'putPrestacio',
    component: PutPrestacioComponent,
    children: []
    },
      {
    path: 'allPrestacio',
    component: AllPrestacioComponent,
    children: []
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestacioRoutingModule { }
