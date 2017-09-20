import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrestacioComponent } from './prestacions/prestacio.component';
import { CopagamentComponent } from './copagaments/copagament.component';
import { ServeiSocialComponent } from './serveisSocials/serveiSocial.component';
//import { AddPrestacioComponent } from './prestacions/addPrestacio/addPrestacio.component';
const routes: Routes = [
    {
    path: 'app-prestacio',
    component: PrestacioComponent,
    children: []
    },
     {
    path: 'app-copagament',
    component: CopagamentComponent,
    children: []
    },
     {
    path: 'app-serveiSocial',
    component: ServeiSocialComponent,
    children: []
    },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServeisRoutingModule { }
