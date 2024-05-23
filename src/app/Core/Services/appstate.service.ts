import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppstateService {

  constructor() { }

  UserState={
    Role: '',
    Username:'',
    isAuthenticated:false,
  }

  public setUserState(state:any){
      this.UserState = {... state};
  }


}
