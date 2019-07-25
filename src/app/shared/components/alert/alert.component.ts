import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ss-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent implements OnInit {
  public readonly Types = ['sucesso', 'erro', 'info', 'atencao'];

  @Input() type: string;
  @Input() mensagem: string;
  @Input() title: string;


  constructor(public router: Router) { }

  ngOnInit() {
    if (this.Types.indexOf(this.type) === -1) {
      throw new Error('[ss-alert] Tipo invalido ' + this.type);
    }
  }

  getType() {
    switch (this.type) {
      case 'sucesso':
        return 'alert-success';
      case 'erro':
        return 'alert-danger';
      case 'info':
        return 'alert-info';
      case 'atencao':
        return 'alert-warning';
    }
  }
}
