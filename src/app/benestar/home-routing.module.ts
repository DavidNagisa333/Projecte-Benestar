import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OrganitzacionsComponent} from './organitzacions/organitzacions.component';
import { ServeisComponent } from './serveis/serveis.component';
import { JaumeMGComponent } from './jaume-mg/jaume-mg.component';

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
    },
    {
    path: 'app-jaume-mg',
    component: JaumeMGComponent,
    children: []
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {}