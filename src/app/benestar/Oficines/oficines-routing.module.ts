import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OficinesComponent } from './oficines.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OficinesRoutingModule { }
