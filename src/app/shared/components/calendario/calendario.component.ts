import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';
import { CalendarioService } from './calendario.service';

@Component({
  selector: 'ss-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
  providers: [CalendarioService]
})

export class CalendarioComponent implements OnInit {
  public dataAtual = 14;
  public posicaoPaleta;
  public horarios;
  public dias;

  public data = [
    {horaInicio: '01:00', horaFim: '02:00', data: '2019-08-18', cor: '#e74c3c'},
    {horaInicio: '06:30', horaFim: '08:00', data: '2019-08-20', cor: '#3498db'},
    {horaInicio: '00:00', horaFim: '07:00', data: '2019-08-14', cor: '#2ecc71'},
    {horaInicio: '04:30', horaFim: '12:00', data: '2019-08-16', cor: '#f1c40f'},
  ];

  constructor(public calendarioService: CalendarioService) {
    setInterval(() => {
      this.posicionarPaleta();
    }, 60000);
  }

  ngOnInit() {
    this.posicionarPaleta();
    this.horarios = this.calendarioService.montarHorarios();
    this.dias = this.calendarioService.montarDias();
  }

  obterArray(num) {
    return this.calendarioService.criarArray(num);
  }

  obterHoras() {
    const horasLength = 24;
    const horarios = this.calendarioService.criarArray(horasLength);
    return horarios;
  }

  clickHora(dia, hora) {
    // const decimal = (minuto * 24) / this.obterArray(24 * 2).length;
    // let decimalTime = decimal * 60 * 60;
    // const hours = Math.floor((decimalTime / (60 * 60)));
    // decimalTime = decimalTime - (hours * 60 * 60);
    // const minutes = Math.floor((decimalTime / 60));
    // console.log(`${dia}, ${hours.toString().length === 1 ? `${0}${hours}` : hours}:${minutes}`);
    console.log(dia, hora);
  }

  pegarHora(hora: number) {
    const horaGrid = hora.toString();
    return horaGrid.length === 1 ? `0${horaGrid}:00` : `${horaGrid}:00`;
  }

  posicionarPaleta() {
    const horaDecimal = this.calendarioService.hourToDecimal(`${new Date().getHours()}:${new Date().getMinutes()}`);
    this.posicaoPaleta = (100 * horaDecimal) / 24;
  }

  obterAtedimento(dia: string) {
    const atendimento = [];
    this.data.forEach(e => {
      if (parseInt(moment(e.data, 'YYYY-MM-DD').format('DD'), 10) === parseInt(dia, 10)) {
        atendimento.push(e);
      }
    });
    return atendimento;
  }

  obterPosicao(item) {
    const inicio = this.calendarioService.hourToDecimal(item.horaInicio);
    return 48 * inicio;
  }

  obterAltura(item) {
    const inicio = this.calendarioService.hourToDecimal(item.horaInicio);
    const fim = this.calendarioService.hourToDecimal(item.horaFim);

    return 48 * (fim - inicio);
  }
}
