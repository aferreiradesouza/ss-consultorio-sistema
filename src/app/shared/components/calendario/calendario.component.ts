import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'ss-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.component.scss']
})

export class CalendarioComponent implements OnInit {
  public month = new Date().getMonth();
  public year = new Date().getFullYear();
  public index: number = 1;

  public days: any[] = this.getDaysInMonth(this.month, this.year);
  public hours: any = [
    {hour: '07:00', horarios: this.montarHorarios()},
    {hour: '07:30', horarios: this.montarHorarios()},
    {hour: '08:00', horarios: this.montarHorarios()},
    {hour: '08:30', horarios: this.montarHorarios()},
    {hour: '09:00', horarios: this.montarHorarios()},
    {hour: '09:30', horarios: this.montarHorarios()},
    {hour: '10:00', horarios: this.montarHorarios()},
    {hour: '10:30', horarios: this.montarHorarios()},
    {hour: '11:00', horarios: this.montarHorarios()},
    {hour: '11:30', horarios: this.montarHorarios()},
    {hour: '12:00', horarios: this.montarHorarios()},
    {hour: '12:30', horarios: this.montarHorarios()},
    {hour: '13:00', horarios: this.montarHorarios()},
    {hour: '13:30', horarios: this.montarHorarios()},
    {hour: '14:00', horarios: this.montarHorarios()},
    {hour: '14:30', horarios: this.montarHorarios()},
  ];

  public showDias = this.criarDias();

  constructor(public router: Router) {
  }

  ngOnInit() {
    console.log(this.days);
  }

  montarHorarios() {
    const horarios = [];
    let i = 0;
    while (i !== this.days.length) {
      horarios.push(i);
      i++;
    }
    return horarios;
  }

  public getDaysInMonth(month, year) {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push({data: moment(new Date(date)).format('DD'), day: this.formatarDay(new Date(date).getDay())});
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  formatarDay(day: number) {
    switch (day) {
      case 0:
        return {extenso: 'Domingo', curto: 'Dom'};
      case 1:
        return {extenso: 'Segunda-feira', curto: 'Seg'};
      case 2:
        return {extenso: 'Terça-feira', curto: 'Ter'};
      case 3:
        return {extenso: 'Quarta-feira', curto: 'Qua'};
      case 4:
        return {extenso: 'Quinta-feita', curto: 'Qui'};
      case 5:
        return {extenso: 'Sexta-feita', curto: 'Sex'};
      case 6:
        return {extenso: 'Sábado', curto: 'Sáb'};
    }
  }

  formatarMes(mes: number) {
    switch (mes) {
      case 0:
        return {extenso: 'Janeiro', curto: 'Jan'};
      case 1:
        return {extenso: 'Fevereiro', curto: 'Fev'};
      case 2:
        return {extenso: 'Março', curto: 'Mar'};
      case 3:
        return {extenso: 'Abril', curto: 'Abr'};
      case 4:
        return {extenso: 'Maio', curto: 'Mai'};
      case 5:
        return {extenso: 'Junho', curto: 'Jun'};
      case 6:
        return {extenso: 'Julho', curto: 'Jul'};
      case 7:
        return {extenso: 'Agosto', curto: 'Ago'};
      case 8:
        return {extenso: 'Setembro', curto: 'Set'};
      case 9:
        return {extenso: 'Outubro', curto: 'Out'};
      case 10:
        return {extenso: 'Novembro', curto: 'Nov'};
      case 11:
        return {extenso: 'Dezembro', curto: 'Dez'};
    }
  }

  diaSelecionado(hora, dia) {
    console.log('hora:', hora, 'dia:', this.days[dia].data + '/' + this.month + '/' + this.year);
  }

  criarDias(limit?: number, startNum?: number) {
    if (limit) {
      const ret = Array(Number(limit)).fill(0).map((x, i) => startNum ? startNum + i : 21 + i);
      return ret;
    } else {
      const ret = Array(Number(7)).fill(0).map((x, i) => i++);
      return ret;
    }
  }

  alterarGrid(crescent: boolean) {
    if (crescent) {
      if (this.index + 1 <= this.showMonthsAmout) {
        this.index = this.index + 1;
        if (this.index === 5) {
          this.showDias = this.criarDias(this.days.length - 28);
        }
        this.showDias = this.showDias.map(e => e + 7);
      } else {
        if (this.month + 1 > 11) {
          return;
        }
        this.month += 1;
        this.reset();
        this.days = this.getDaysInMonth(this.month, this.year);
        return;
      }
    } else {
      if (this.index - 1 >= 1) {
        if (this.index === 5) {
          this.index = this.index - 1;
          this.showDias = this.criarDias(7, 28);
        } else {
          this.index = this.index - 1;
        }

        this.showDias = this.showDias.map(e => e - 7);
      } else {
        if (this.month - 1 < 0) {
          return;
        }
        this.month -= 1;
        this.reset();
        this.days = this.getDaysInMonth(this.month, this.year);

        return;
      }
    }
  }

  alterarMes(type: string) {
    if (type === 'up' && this.month + 1 <= 11) {
      this.month += 1;
    } else if (type === 'down' && this.month - 1 >= 0) {
      this.month -= 1;
    }

    this.reset();
    this.days = this.getDaysInMonth(this.month, this.year);
  }

  reset() {
    this.index = 1;
    this.showDias = this.criarDias();
  }

  get showMonthsAmout(): number {
    const count: number = this.days.length / 7;
    return Math.ceil(count);
  }

  mouseEnter(event: MouseEvent) {
    event.srcElement['bgColor'] = '#b2e2bc';
    event.srcElement['width'] = `${event.srcElement['clientWidth']}px`;
    event.srcElement['innerHTML'] =
    `<div style="font-size: 13px; cursor: pointer">Marcar horário</div>`;
  }

  mouseLeave(event: MouseEvent) {
    event.srcElement['width'] = '';
    event.srcElement['bgColor'] = '';
    event.srcElement['innerHTML'] = '';
  }
}
