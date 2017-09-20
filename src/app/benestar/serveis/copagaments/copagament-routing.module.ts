import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCopagamentComponent } from './addCopagament/addCopagament.component';
import { DelCopagamentComponent } from './delCopagament/delCopagament.component';
import { PutCopagamentComponent } from './putCopagament/putCopagament.component';
import { AllCopagamentComponent } from './allCopagament/allCopagament.component';

const routes: Routes = [
      {
    path: 'addCopagament',
    component: AddCopagamentComponent,
    children: []
    },
      {
    path: 'delCopagament',
    component: DelCopagamentComponent,
    children: []
    },
      {
    path: 'putCopagament',
    component: PutCopagamentComponent,
    children: []
    },
      {
    path: 'allCopagament',
    component: AllCopagamentComponent,
    children: []
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CopagamentRoutingModule { }
