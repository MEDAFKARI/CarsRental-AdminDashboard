import { Component, OnInit } from '@angular/core';
import { AppstateService } from './Core/Services/appstate.service';
import { AuthService } from './Core/Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private appstate:AppstateService,private authService:AuthService,
              private router:Router
  ){}


  ngOnInit(): void {
    try { 
      let token = this.authService.getToken()
      if(token && this.authService.isTokenExpired(token) ){
       console.log(this.authService.getRole());
       this.appstate.setUserState({
        Role:this.authService.getRole(),
        isAuthenticated:true
    })
        this.router.navigateByUrl(`/`);
     }
     else{
      localStorage.clear();
      this.appstate.setUserState({
        Role: '',
        Username:'',
        isAuthenticated:false,
      })
      this.router.navigateByUrl(`/login`);
    }
           
     } catch (error) {
       console.error("An error occurred while initializing the app:", error);
     }
   }
  
}
