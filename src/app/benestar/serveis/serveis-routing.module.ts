import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestacioComponent } from './prestacio/prestacio.component';

const routes: Routes = [
    {
    path: 'app-prestacio',
    component: PrestacioComponent,
    children: []
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServeisRoutingModule { }
