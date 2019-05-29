import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ss-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public breadcrumb: Array<{route: string, label: string}>;

  constructor() {
    this.breadcrumb = [
      {route: 'home', label: 'Início'},
      {route: 'consultas', label: 'Consultas'},
      {route: 'cancelar-consulta', label: 'Cancelar consulta'},
    ];
  }

  ngOnInit() {

  }
}
