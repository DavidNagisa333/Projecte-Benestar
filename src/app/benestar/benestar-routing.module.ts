import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OrganitzacionsComponent} from './organitzacions/organitzacions.component';
import { ServeisComponent } from './serveis/serveis.component';

const routes: Routes = [
    {
    path: 'organitzacions',
    component: OrganitzacionsComponent,
    children: []
    },
      {
    path: 'app-serveis',
    component: ServeisComponent,
    children: []
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class BenestarRoutingModule {}