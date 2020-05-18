import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  @Input() taskData: string;

  public restaurantsList: Array<string>;

  constructor() { }

  ngOnInit(): void {
    this.restaurantsList = ['restaurants 1', 'restaurants 2', 'restaurants 3', 'restaurants 4', 'restaurants 5', 'restaurants 6'];
  }

}
