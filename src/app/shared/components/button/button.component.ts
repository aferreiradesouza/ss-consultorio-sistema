import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ss-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {
  public readonly colors = ['azul', 'cinza', 'amarelo', 'verde', 'vermelho', 'cyan', 'light', 'preto'];

  @Input() fill?: boolean = true;
  @Input() label: string;
  @Input() color?: string = 'azul';
  @Input() disabled?: boolean = false;


  constructor(public router: Router) {}

  ngOnInit() {
    if (this.colors.indexOf(this.color) === -1) {
      throw new Error('[ss-button] Cor invalida ' + this.color);
    }
  }

  public getColor() {
    switch (this.color) {
      case 'azul':
          return this.fill ? 'btn-primary' : 'btn-outline-primary';
      case 'cinza':
          return this.fill ? 'btn-secondary' : 'btn-outline-secondary';
      case 'amarelo':
          return this.fill ? 'btn-warning' : 'btn-outline-warning';
      case 'verde':
          return this.fill ? 'btn-success' : 'btn-outline-success';
      case 'vermelho':
          return this.fill ? 'btn-danger' : 'btn-outline-danger';
      case 'cyan':
          return this.fill ? 'btn-info' : 'btn-outline-info';
      case 'light':
          return this.fill ? 'btn-light' : 'btn-outline-light';
      case 'preto':
          return this.fill ? 'btn-dark' : 'btn-outline-dark';
  }
  }
}
