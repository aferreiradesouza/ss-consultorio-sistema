import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import menu from '../../menu.json';

@Component({
  selector: 'ss-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  public menuItens = menu;
  public search: string = '';
  public isLoading: boolean;
  public isOpen: boolean = true;
  public menuSelect: any = null;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  selecionarCollapsible() {

  }

  alternar() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }


}
