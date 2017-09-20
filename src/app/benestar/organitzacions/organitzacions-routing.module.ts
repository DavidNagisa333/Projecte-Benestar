import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProvaComponent} from './prova/prova.component';

const routes: Routes = [
    {
    path: 'prova',
    component: ProvaComponent,
    
    }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class OrganitzacionsRoutingModule { }
