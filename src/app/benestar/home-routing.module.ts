import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OrganitzacionsComponent} from './organitzacions/organitzacions.component';
import { ServeisComponent } from './serveis/serveis.component';
import { PersonesComponent } from './persones/persones.component';


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
    path: 'app-persones',
    component: PersonesComponent,
    children: []
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {}