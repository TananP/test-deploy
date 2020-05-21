import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryFoodService {
  baseUrl = environment.apiSysUrl;
  headers = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

  getFoodCategory() {
    return this.http.get(this.baseUrl + 'web_api/api/MerchantCategory/GetCategoryFood');
  }
}
