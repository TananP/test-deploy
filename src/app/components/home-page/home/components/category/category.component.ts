import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() taskData: string;
  public top = false;
  public bottom = true;

  public categoryList: Array<string>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.categoryList = ['Desserts' , 'Drink' , 'Snack' , 'Seafood' , 'Thai'];
  }
}
