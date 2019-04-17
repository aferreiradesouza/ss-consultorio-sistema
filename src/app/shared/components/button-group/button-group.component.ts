import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ss-button-group',
  templateUrl: './button-group.page.html',
  styleUrls: ['./button-group.component.scss']
})

export class ButtonGroupComponent implements OnInit {

  @Input() group: Array<{ label: string, color: string }>;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  getColor(color) {
    switch (color) {
      case 'azul':
          return 'btn-primary';
      case 'cinza':
          return 'btn-secondary';
      case 'amarelo':
          return 'btn-warning';
      case 'verde':
          return 'btn-success';
      case 'vermelho':
          return 'btn-danger';
      case 'cyan':
          return 'btn-info';
      case 'light':
          return 'btn-light';
      case 'preto':
          return 'btn-dark';
    }
  }
}
