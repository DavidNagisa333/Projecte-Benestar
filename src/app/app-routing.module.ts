import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
import { JaumeMGComponent } from './benestar/jaume-mg/jaume-mg.component';
import { JaumeCComponent } from './benestar/jaume-c/jaume-c.component';
=======
import {HomeComponent} from './benestar/home.component';
>>>>>>> 9d8405588978537ed9c6718921aef4b2086d0b21
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
<<<<<<< HEAD
    path: '',
    children: []
    },    
    {
    path: 'app-jaume-mg',
    component: JaumeMGComponent,
    children: []
    },
    {
    path: 'app-jaume-c',
    component: JaumeCComponent,
    children: []
=======
    path: 'home',
    component: HomeComponent,
>>>>>>> 9d8405588978537ed9c6718921aef4b2086d0b21
    },
    {
    path: 'login',
    component: LoginComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
