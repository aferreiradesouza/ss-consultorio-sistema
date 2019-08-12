import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ss-medico',
  templateUrl: './medico.page.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent implements OnInit {
  public breadcrumb: Array<{route: string, label: string}>;

  constructor() {
  }

  ngOnInit() {

  }
}
