import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryFoodService } from 'src/app/services/category-food.service';

@Component({
  selector: 'app-home-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() taskData: string;
  public top = false;
  public bottom = true;

  public categoryList: any;
  constructor(private route: ActivatedRoute , private categoryAPI: CategoryFoodService) {}

  ngOnInit(): void {
    // this.categoryList = [ 'Desserts' , 'Drink' , 'Snack' , 'Seafood' , 'Thai'];
    // Call API get category
    this.categoryAPI.getFoodCategory().subscribe( x => {
      this.categoryList = x;
    });
  }
}
