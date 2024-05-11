import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { City } from '../Models/City';

const API_URL= `${environment.API_URL}/cities`


@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }


  getAllCities():Observable<any>{
    return this.http.get(`${API_URL}/get`)
  }

  getCity(cityId:number):Observable<any>{
    return this.http.get(`${API_URL}/get/${cityId}`)
  }

  addCity(city:City):Observable<any>{
    return this.http.post(`${API_URL}/add`,city)
  }


  deleteCity(cityId:number):Observable<any>{
    return this.http.delete(`${API_URL}/delete/${cityId}`)
  }

  

  updateCity(citId:number,city:City):Observable<any>{
    return this.http.put(`${API_URL}/update/${citId}`,city)
  }




}
