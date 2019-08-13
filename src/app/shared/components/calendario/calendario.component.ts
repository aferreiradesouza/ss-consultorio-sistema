import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { CalendarioService } from './calendario.service';

@Component({
  selector: 'ss-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
  providers: [CalendarioService]
})

export class CalendarioComponent implements OnInit {
  constructor(public calendarioService: CalendarioService) { }

  ngOnInit() {

  }

  get obterArray() {
    return this.calendarioService.criarArray(7);
  }
}
