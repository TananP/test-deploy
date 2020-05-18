import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  public taskChoosed  = this.route.snapshot.paramMap.get('task');
  public categoryChoosed = this.route.snapshot.paramMap.get('category');
  public shopList: Array<number>;
  public alphabetENList: Array<string>;
  public alphabetTHList: Array<string>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.alphabetENList = ['a' , 'b' , 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    this.alphabetTHList = ['0', '1', '3', 'ก', 'ข', 'ค'];
    this.shopList = [1, 2, 3, 4, 5, 6, 7];
  }

}
