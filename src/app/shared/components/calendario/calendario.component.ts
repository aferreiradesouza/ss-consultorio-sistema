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
    this.obterHoras();
  }

  obterArray(num) {
    return this.calendarioService.criarArray(num);
  }

  obterHoras() {
    const horasLength = 24;
    const horarios = this.calendarioService.criarArray(horasLength).map((e, index) => index++);
    return horarios;
  }

  clickHora(dia, minuto) {
    const decimal = (minuto * 24) / this.obterArray(24 * 4).length;
    let decimalTime = decimal * 60 * 60;
    const hours = Math.floor((decimalTime / (60 * 60)));
    decimalTime = decimalTime - (hours * 60 * 60);
    const minutes = Math.floor((decimalTime / 60));
    console.log(`${dia}, ${hours.toString().length === 1 ? `${0}${hours}` : hours}:${minutes}`);
  }

  pegarHora(hora: number) {
    const horaGrid = hora.toString();
    return horaGrid.length === 1 ? `0${horaGrid}:00` : `${horaGrid}:00`;
  }
}
