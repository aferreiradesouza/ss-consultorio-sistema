import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ss-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss']
})

export class ButtonIconComponent implements OnInit {
  public readonly colors = ['azul', 'cinza', 'amarelo', 'verde', 'vermelho', 'cyan', 'light', 'preto'];
  public readonly sizes = ['small', 'default', 'big'];

  @Input() fill?: boolean = true;
  @Input() icon: string;
  @Input() color?: string = 'azul';
  @Input() disabled?: boolean = false;
  @Input() size: string = 'default';


  constructor(public router: Router) { }

  ngOnInit() {
    if (this.colors.indexOf(this.color) === -1) {
      throw new Error('[ss-button] Cor invalida ' + this.color);
    }

    if (!this.icon) {
      throw new Error('[ss-button] Icon is mandatory');
    }

    if (this.sizes.indexOf(this.size) === -1) {
      throw new Error('[ss-button] Tamanho Inválido ' + this.size);
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
