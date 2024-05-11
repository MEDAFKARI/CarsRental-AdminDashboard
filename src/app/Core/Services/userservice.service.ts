import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


const API_URL= `${environment.API_URL}/admin`

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  

  constructor(private http:HttpClient) { }

  getUsersList():Observable<any>{
    return this.http.get(`${API_URL}/get/userslist`);
  }

  getStoreOwnerList():Observable<any> {
    return this.http.get(`${API_URL}/get/storeOwnersList`);
  }

  getNormalUserList():Observable<any> {
    return this.http.get(`${API_URL}/get/normalUserList`);
  }


}
