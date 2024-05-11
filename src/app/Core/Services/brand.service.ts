import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Brand } from '../Models/brand';

const API_URL= `${environment.API_URL}/brands`


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http:HttpClient) { }

  getAllBrands():Observable<any>{
    return this.http.get(`${API_URL}/get`);
  }

  getBrand(brandId:number):Observable<any>{
    return this.http.get(`${API_URL}/get/${brandId}`);
  }


  addBrand(brand:Brand):Observable<any>{
    return this.http.post(`${API_URL}/add`, brand);
  }



}
