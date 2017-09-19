import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestacioComponent } from './prestacions/prestacio.component';

const routes: Routes = [
    {
    path: 'prestacio',
    component: PrestacioComponent,
    children: []
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServeisRoutingModule { }
