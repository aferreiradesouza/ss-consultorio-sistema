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
  public dragY: number;
  public dragYstart: number;
  public dragYend = 0;

  public data = [
    {horaInicio: '01:00', horaFim: '02:00', data: '2019-08-18', cor: '#e74c3c', id: 1},
    {horaInicio: '06:30', horaFim: '08:00', data: '2019-08-20', cor: '#3498db', id: 2},
    {horaInicio: '00:00', horaFim: '07:00', data: '2019-08-14', cor: '#2ecc71', id: 3},
    {horaInicio: '04:30', horaFim: '12:00', data: '2019-08-16', cor: '#f1c40f', id: 4},
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

  onDragStart(event: DragEvent) {
    this.dragYstart = event.screenY;
  }

  onDrag(event: DragEvent, item) {
    if (event.screenY === 0) {
      return ;
    }
    if ((this.dragYstart - event.offsetY) % 24 === 0) {
      const i = this.data.map(e => e.id).indexOf(item.id);
      let hora = this.calendarioService.hourToDecimal(this.data[i].horaFim);
      if (event.offsetY > this.dragYend) {
        hora += 0.5;
      } else {
        hora -= 0.5;
      }
      this.dragYend = 0;
      this.data[i].horaFim = this.calendarioService.decimalToHour(hora);
    }
  }
}
