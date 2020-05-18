import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-delivery-home',
  templateUrl: './delivery-home.component.html',
  styleUrls: ['./delivery-home.component.scss']
})
export class DeliveryHomeComponent implements OnInit {

  constructor(
    private testAPI: TestService
  ) {
    // Test call API
    this.testAPI.getWeather().subscribe(x => {
      console.log('Data === ' + x[0].date);
    });
   }

  ngOnInit(): void {
  }

}
