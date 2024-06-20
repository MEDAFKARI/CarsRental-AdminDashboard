import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AppstateService } from './appstate.service';
import { Router } from '@angular/router';

const API_URL= `${environment.API_URL}/auth`

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient,
        private appstate:AppstateService,
        private router:Router
  ) { }

  login(loginReq:any):Observable<any>{
    return this.httpclient.post(`${API_URL}/signin`, loginReq);
  }


  logUser(role:string,token:string){
    localStorage.setItem('token',token);
    localStorage.setItem('role',role);
      this.appstate.setUserState({
          Role:role,
          isAuthenticated:true
      })
      this.router.navigateByUrl(`/`);
  }


    getToken(): string | null{
        let token = localStorage.getItem( 'token' );

      return token;
    }

    getRole(): string | null{
      let role = localStorage.getItem( 'role' );
      console.log(role);
      if( role !=null){
          role = role;
    }
    return role;
    }


    isTokenExpired(token: string) {
      const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
      console.log(expiry * 1000)
      return expiry * 1000 > Date.now();
    }




}
