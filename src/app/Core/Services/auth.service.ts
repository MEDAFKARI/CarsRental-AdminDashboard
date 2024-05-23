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
      this.appstate.setUserState({
          Role:role,
          isAuthenticated:true
      })
      this.router.navigateByUrl(`/`);
  }



}
