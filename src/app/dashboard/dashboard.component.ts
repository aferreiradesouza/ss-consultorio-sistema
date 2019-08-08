import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ss-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public breadcrumb: Array<{route: string, label: string}>;

  constructor() {
  }

  ngOnInit() {

  }
}
