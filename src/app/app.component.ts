import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showHead = false;
  public searchPage = false;
  public routerPath = ' ';
  title = 'Delivery-Web';
  baseUrl = environment.apiSysUrl;

  constructor(private router: Router , private http: HttpClient) {
    // Check Url
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        // Checking URL is in task select page or not.
        if (event.url === '/') {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
        // Check URL which task that costomer select.
        if (event.url.includes('/delivery')){
          this.routerPath = 'delivery';
        } else if (event.url.includes('/reserve')){
          this.routerPath = 'reserve';
        }
      }
    });
    // tslint:disable-next-line: max-line-length
    http.get<any>(this.baseUrl + 'web_api/api/Authentication/SigninLine', {observe: 'response'}).subscribe(resp => {
      console.log(resp.headers.get('Content-Length'));
    });
  }
}
