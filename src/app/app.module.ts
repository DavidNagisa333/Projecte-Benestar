import { NgModule } from '@angular/core';

import { HomeModule } from './benestar/home.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    HomeModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ]
})
export class AppModule { }
