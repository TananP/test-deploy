import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantInfoService {
  baseUrl = environment.apiSysUrl;
  headers = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) {}

  getRestaurantInfo(pageNumber: number) {
    // console.log('name === ' + pageNumber);
    return this.http.get(this.baseUrl + 'web_api/api/Merchant/GetMerchantList?name=starbuck&pageNumber=' + pageNumber + '&pageLength=10');
  }
}
