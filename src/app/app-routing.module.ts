import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
import { ServeisComponent } from './benestar/serveis/serveis.component';
import { SergiComponent } from './benestar/sergi/sergi.component';
=======
import { DavidComponent } from './benestar/david/david.component';
//import { SergiComponent } from './benestar/sergi/sergi.component';
>>>>>>> c94213f59440cc7579e7174ef6c9976c829ca5b4
import { JaumeMGComponent } from './benestar/jaume-mg/jaume-mg.component';
import { JaumeCComponent } from './benestar/jaume-c/jaume-c.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
    path: '',
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
    },
    {
    path: 'app-jaume-c',
    component: JaumeCComponent,
    children: []
    },
    {
    path: 'login',
    component: LoginComponent,
    children: []
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
