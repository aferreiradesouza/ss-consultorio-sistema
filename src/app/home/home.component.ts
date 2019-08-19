import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ss-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data = [
    {
      data: '2019-08-19', agendamentos: [
        { hora: '08:00', type: 'Livre' },
        { hora: '08:30', type: 'Livre' },
        { hora: '09:00', type: 'Livre' },
        { hora: '09:30', type: 'Livre' },
        { hora: '10:00', type: 'Livre' },
        { hora: '10:00', type: 'Livre' },
        { hora: '10:00', type: 'Livre' },
        { hora: '10:00', type: 'Livre' },
        { hora: '10:00', type: 'Livre' },
        { hora: '10:00', type: 'Livre' },
      ]
    },
    {
      data: '2019-08-20', agendamentos: [
        { hora: '10:00', type: 'Livre' },
        { hora: '10:30', type: 'Livre' },
        { hora: '11:00', type: 'Livre' },
        { hora: '11:30', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
      ]
    },
    {
      data: '2019-08-21', agendamentos: [
        { hora: '10:00', type: 'Livre' },
        { hora: '10:30', type: 'Livre' },
        { hora: '11:00', type: 'Livre' },
        { hora: '11:30', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
      ]
    },
    {
      data: '2019-08-22', agendamentos: [
        { hora: '10:00', type: 'Livre' },
        { hora: '10:30', type: 'Livre' },
        { hora: '11:00', type: 'Livre' },
        { hora: '11:30', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
      ]
    },
    {
      data: '2019-08-23', agendamentos: [
        { hora: '10:00', type: 'Livre' },
        { hora: '10:30', type: 'Livre' },
        { hora: '11:00', type: 'Livre' },
        { hora: '11:30', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
      ]
    },
    {
      data: '2019-08-24', agendamentos: [
        { hora: '10:00', type: 'Livre' },
        { hora: '10:30', type: 'Livre' },
        { hora: '11:00', type: 'Livre' },
        { hora: '11:30', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '11:00', type: 'Livre' },
        { hora: '11:30', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '11:00', type: 'Livre' },
        { hora: '11:30', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
        { hora: '11:00', type: 'Livre' },
        { hora: '11:30', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
      ]
    },
    {
      data: '2019-08-16', agendamentos: [
        { hora: '10:00', type: 'Livre', marcacao: { nome: '', cpf: '' } },
        { hora: '10:30', type: 'Livre' },
        { hora: '11:00', type: 'Livre' },
        { hora: '11:30', type: 'Livre' },
        { hora: '12:00', type: 'Livre' },
      ], maximoEncaixes: 5
    },
  ];
  constructor() {
  }

  ngOnInit() {

  }
}
