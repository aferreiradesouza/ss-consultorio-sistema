import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ss-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public breadcrumb: Array<{route: string, label: string}>;

  constructor() {
  }

  ngOnInit() {

  }
}
