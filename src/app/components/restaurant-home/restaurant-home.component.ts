import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.scss']
})
export class RestaurantHomeComponent implements OnInit {
  public restaurantName = this.route.snapshot.paramMap.get('restaurantID');
  public routeId = this.route.snapshot.paramMap.get('routeID');
  public taskSelect = this.route.snapshot.paramMap.get('task');


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {}
}
