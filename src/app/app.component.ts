import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LoginService } from './login/login.service';
//import { AuthHttp, AuthConfig } from 'angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [ LoginService ]
})
export class AppComponent implements OnInit {
  title = 'app';

  logged=false;

   constructor(private loginService : LoginService,
              private router:Router){}

   logout(){         
        this.loginService.logout();  
        this.router.navigate(['/home']); 
   }

   ngOnInit(){
       if (this.loginService.getToken()=="" || this.loginService.getToken() === undefined)
           {
               this.logged=false;
               this.router.navigate(['/home']); 
           }
       else{
           this.logged=true;  
           this.router.navigate(['/home']);
       }
   }
}
