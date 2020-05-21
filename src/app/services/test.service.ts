import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseUrl = environment.apiSysUrl;
  headers = new HttpHeaders().set('content-type', 'application/json');
  constructor(private http: HttpClient) {}

  // getWeather(date, temperatureC, temperatureF, summary) {
  //   return this.http.get<Test[]>(this.baseUrl + 'web_api/weatherforecast', {
  //       params: {
  //           date,
  //           temperatureC,
  //           temperatureF,
  //           summary
  //       }
  //   });
  // }4
  getCategory() {
      return this.http.get(this.baseUrl + 'web_api/api/MerchantCategory/GetCategoryFood');
  }
}
