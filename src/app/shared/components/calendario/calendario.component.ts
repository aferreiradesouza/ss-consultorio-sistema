import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ss-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.component.scss']
})

export class CalendarioComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
}
