import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-information',
  templateUrl: './order-information.component.html',
  styleUrls: ['./order-information.component.scss']
})
export class OrderInformationComponent implements OnInit {
  @Input() orderID: string;
  constructor() { }

  ngOnInit(): void {
  }

}
