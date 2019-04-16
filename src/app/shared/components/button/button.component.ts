import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ss-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {

  @Input() fill?: boolean = true;

  constructor(public router: Router) {}

  ngOnInit() {
  }
}
