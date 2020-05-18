import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss']
})
export class SearchResultPageComponent implements OnInit {
  public taskChoosed = this.route.snapshot.paramMap.get('task');
  public shopList = [1, 2, 3, 4];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
