import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ss-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {

  @Input() icon: string;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  getIcon() {
    return [`fa fa-${this.icon}`];
  }
}
