import { Component, OnInit, Input } from '@angular/core';
import { CategoryMerchantService } from 'src/app/services/category-merchant.service';

@Component({
  selector: 'app-home-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  @Input() taskData: string;

  public restaurantsList: any;

  constructor(private restaurantsAPI: CategoryMerchantService) { }

  ngOnInit(): void {

    this.restaurantsAPI.getMerchantCategory().subscribe(x => {
      this.restaurantsList = x;
    });
  }

}
