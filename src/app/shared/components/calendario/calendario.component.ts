import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'ss-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.component.scss']
})

export class CalendarioComponent implements OnInit {

  public days: any[] = this.getDaysInMonth(4, 2019);
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

  public showDias = this.criarDias;

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

  diaSelecionado(hora, dia) {
    console.log('hora:', hora, 'dia:', dia);
  }

  get criarDias() {
    const ret = Array(Number(7)).fill(0).map((x, i) => i++);
    return ret;
  }
}
