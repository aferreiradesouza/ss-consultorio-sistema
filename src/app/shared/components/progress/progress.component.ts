import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ss-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.component.scss']
})

export class ProgressComponent implements OnInit {
  public readonly colorTypes = ['azul', 'amarelo', 'verde', 'vermelho', 'cyan'];

  @Input() value: string;
  @Input() color: string;
  @Input() animated?: boolean = true;
  @Input() decoracao?: boolean = true;

  constructor(public router: Router) { }

  ngOnInit() {
    if (this.colorTypes.indexOf(this.color) === -1) {
      throw new Error('[ss-progress] Cor invalida ' + this.color);
    }
  }

  getColor() {
    switch (this.color) {
      case 'azul':
          return 'bg-primary';
      case 'amarelo':
          return 'bg-warning';
      case 'verde':
          return 'bg-success';
      case 'vermelho':
          return 'bg-danger';
      case 'cyan':
          return 'bg-info';
    }
  }
}
