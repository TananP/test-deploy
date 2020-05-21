import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantInfoService } from 'src/app/services/restaurant-info.service';

@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.scss']
})
export class RestaurantHomeComponent implements OnInit {
  public restaurantName = this.route.snapshot.paramMap.get('restaurantID');
  public routeId = this.route.snapshot.paramMap.get('routeID');
  public taskSelect = this.route.snapshot.paramMap.get('task');
  public restaurantInfo: any;

  constructor(private route: ActivatedRoute , private restaurantAPI: RestaurantInfoService) {
    console.log(this.restaurantInfo);
    this.restaurantAPI.getRestaurantInfo(1).subscribe(x => {
      this.restaurantInfo = x;
    });
   }

  ngOnInit(): void {
  }
}
