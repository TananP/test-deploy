import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-home',
  templateUrl: './cart-home.component.html',
  styleUrls: ['./cart-home.component.scss']
})
export class CartHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      // Get location lat lng
      navigator.geolocation.getCurrentPosition(resp => {
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
          console.log('lng === ' + resp.coords.longitude + ' lat === ' +  resp.coords.latitude);
        },
        err => {
          reject(err);
        });
    });

  }

}
