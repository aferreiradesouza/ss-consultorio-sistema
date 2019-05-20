import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ss-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  @Input() menuItens: any;

  constructor(public router: Router) { }

  ngOnInit() {
    console.log(this.menuItens);
  }
}
