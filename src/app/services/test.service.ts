import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Test } from '../models/master-data/test/test.module';


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
  // }
  getWeather() {
    // return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
      return this.http.get(this.baseUrl + 'web_api/weatherforecast');
  }
}
