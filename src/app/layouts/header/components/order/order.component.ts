import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public orderInfo: boolean;
  public orderID: number;
  public orderList = [1, 2, 3, 4];
  constructor() { }

  ngOnInit(): void {
    this.orderInfo = false;
  }

  showOrderInfo(id: number){
    if (id >= 0){
      this.orderID =  id;
      this.orderInfo = true;
    }else{
      this.orderInfo = false;
    }
  }

}
