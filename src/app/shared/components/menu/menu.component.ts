import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, RoutesRecognized, ActivatedRoute } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { menuItem } from '../../menu';

@Component({
  selector: 'ss-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  public menuItens = menuItem;
  public search: string = '';
  public isLoading: boolean;
  public isOpen: boolean = true;
  public menuSelect: any = null;
  public breadCrumb = [];

  @ViewChild(DialogComponent) public dialog: DialogComponent;

  @Input() active: string;


  constructor(public router: Router, public route: ActivatedRoute) {
    router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        this.breadCrumb = [];
        this.obterBreadcrumb(event.state.root);
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  ngOnInit() {
    this.obterBreadcrumb(this.route.snapshot.root);
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  obterBreadcrumb(route) {
    if (route.data.breadcrumb) {
      if (this.breadCrumb[this.breadCrumb.length - 1] !== route.data.breadcrumb) {
        this.breadCrumb.push(route.data.breadcrumb);
      }
    }
    if (route.children.length > 0) {
      this.obterBreadcrumb(route.children[0]);
    }
  }

  get routes(): { route: string, label: string }[] {
    return this.breadCrumb;
  }

  showIcon(index: number): boolean {
    return index + 1 !== this.routes.length;
  }

  public selectBreadcrumb(route: { route: string, label: string }): void {
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
      return ['activeMenu'];
    }
    return '';
  }

  pop() {
    console.log('pop');
    this.dialog.toggle();
  }

  navegar(url: string) {
    if (!url) { return; }
    const urlDestino = url.split('/');
    this.router.navigate(urlDestino);
  }


}
