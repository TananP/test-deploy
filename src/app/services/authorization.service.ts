import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  baseUrl = environment.apiSysUrl;
  headers = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

  getToken(code: string){
    return this.http.get(this.baseUrl + 'web_api/api/Authentication/UserLogin', { params: {
        code
      }
    });
  }
}
