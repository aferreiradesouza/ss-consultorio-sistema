import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import menu from '../../menu.json';
import { e } from '@angular/core/src/render3';

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

  @Input() active: string;

  constructor(public router: Router) { }

  ngOnInit() {
    console.log(this.router);
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  get routes(): string[] {
    const breadscrumb: string = this.router.url.replace('/', '');
    let route = breadscrumb.split('/');
    route = route.map(element => {
              element = this.transformString(element, true);
              return element.charAt(0).toUpperCase() + element.slice(1);
            });
    return route;
  }

  showIcon(index: number): boolean {
    return index + 1 !== this.routes.length;
  }

  public selectBreadcrumb(route: string): void {
    const destino = [];
    for (const item of this.routes) {
      destino.push(this.transformRoute(item));
      if (item === route) {
        break;
      }
    }
    this.router.navigate(destino);
  }

  transformRoute(route): string {
    let _route = route.charAt(0).toLowerCase() + route.slice(1);
    _route = this.transformString(_route, false);
    return _route;
  }

  transformString(str, space?: boolean) {
    let accents;
    let accentsOut;
    if (space) {
      accents    += '-';
      accentsOut += ' ';
    } else {
      accents    += ' ';
      accentsOut += '-';
    }
    str = str.split('');
    const strLen = str.length;
    let i, x;
    for (i = 0; i < strLen; i++) {
      if ((x = accents.indexOf(str[i])) !== -1) {
        str[i] = accentsOut[x];
      }
    }
    return str.join('');
  }

  alternar() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  setActiveMenu(label) {
    if (this.active === label) {
      return ['activeMenu', 'background-menu'];
    }
    return '';
  }


}
