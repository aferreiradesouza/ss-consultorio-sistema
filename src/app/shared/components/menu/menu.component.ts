import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import menu from '../../menu.json';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'ss-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  public menuItens = menu;
  public search: string = '';
  public isLoading: boolean;
  public isOpen: boolean = true;
  public menuSelect: any = null;

  @ViewChild(DialogComponent) public dialog: DialogComponent;

  @Input() active: string;
  @Input() breadcrumb: Array<{route: string, label: string}>;


  constructor(public router: Router) { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  get routes(): {route: string, label: string}[] {
    return this.breadcrumb;
  }

  showIcon(index: number): boolean {
    return index + 1 !== this.routes.length;
  }

  public selectBreadcrumb(route: {route: string, label: string}): void {
    const destino = [];
    for (const item of this.routes) {
      destino.push(item.route);
      if (item.label === route.label) {
        break;
      }
    }
    this.router.navigate(destino);
  }

  alternar() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  selectTab(event, item) {
    console.log(event, item);
  }

  setActiveMenu(label) {
    if (this.active === label) {
      return ['activeMenu', 'background-menu'];
    }
    return '';
  }

  pop() {
    console.log('pop');
    this.dialog.toggle();
  }


}
