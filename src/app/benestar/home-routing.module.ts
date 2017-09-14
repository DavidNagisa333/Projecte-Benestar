import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OrganitzacionsComponent} from './organitzacions/organitzacions.component';

const routes: Routes = [
    {
    path: 'organitzacions',
    component: OrganitzacionsComponent,
    children: []
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {}