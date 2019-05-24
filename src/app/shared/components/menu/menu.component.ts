import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import menu from '../../menu.json';

@Component({
  selector: 'ss-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  public mockRouting: string = 'home/consultas/editar-consultas';
  public menuItens = menu;
  public search: string = '';
  public isLoading: boolean;
  public isOpen: boolean = true;
  public menuSelect: any = null;

  constructor(public router: Router) { }

  ngOnInit() {
    const a = this.routes;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  get routes(): string[] {
    let route = this.mockRouting.split('/');
    route = route.map(e => { 
              e = this.removerEspacos(e);
              return e.charAt(0).toUpperCase() + e.slice(1);
            })
    return route;
  }

  removerEspacos(str) {
    const accents    = '-';
    const accentsOut = " ";
    str = str.split('');
    const strLen = str.length;
    let i, x;
    for (i = 0; i < strLen; i++) {
      if ((x = accents.indexOf(str[i])) != -1) {
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


}
