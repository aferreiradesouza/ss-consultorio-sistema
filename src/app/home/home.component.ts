import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ss-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data = [
    {
      data: '2019-08-19', maximoEncaixes: 5, agendamentos: [
        { hora: '08:00', status: 'Livre', marcacao: null },
        { hora: '08:30', status: 'Ocupado', marcacao: { nome: 'Arthur Ferreiraddddddddddddddd', cpf: '' } },
        { hora: '09:00', status: 'Ocupado', marcacao: { nome: 'Arthur Ferreira', cpf: '' } },
        { hora: '09:30', status: 'Livre', marcacao: null },
        { hora: '10:00', status: 'Ocupado', marcacao: { nome: 'Arthur Ferreira', cpf: '' } },
        { hora: '10:00', status: 'Livre', marcacao: null },
        { hora: '10:00', status: 'Ocupado', marcacao: { nome: 'Arthur Ferreira', cpf: '' } },
        { hora: '10:00', status: 'Livre', marcacao: null },
        { hora: '10:00', status: 'Ocupado', marcacao: { nome: 'Arthur Ferreira', cpf: '' } },
        { hora: '10:00', status: 'Livre', marcacao: null },
      ]
    },
    {
      data: '2019-08-20', maximoEncaixes: 5, agendamentos: [
        { hora: '10:00', status: 'Livre', marcacao: null },
        { hora: '10:30', status: 'Livre', marcacao: null },
        { hora: '11:00', status: 'Livre', marcacao: null },
        { hora: '11:30', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
      ]
    },
    {
      data: '2019-08-21', maximoEncaixes: 5, agendamentos: [
        { hora: '10:00', status: 'Livre', marcacao: null },
        { hora: '10:30', status: 'Livre', marcacao: null },
        { hora: '11:00', status: 'Livre', marcacao: null },
        { hora: '11:30', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
      ]
    },
    {
      data: '2019-08-22', maximoEncaixes: 5, agendamentos: [
        { hora: '10:00', status: 'Livre', marcacao: null },
        { hora: '10:30', status: 'Livre', marcacao: null },
        { hora: '11:00', status: 'Livre', marcacao: null },
        { hora: '11:30', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
      ]
    },
    {
      data: '2019-08-23', maximoEncaixes: 5, agendamentos: [
        { hora: '10:00', status: 'Livre', marcacao: null },
        { hora: '10:30', status: 'Livre', marcacao: null },
        { hora: '11:00', status: 'Livre', marcacao: null },
        { hora: '11:30', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
      ]
    },
    {
      data: '2019-08-24', maximoEncaixes: 5, agendamentos: [
        { hora: '10:00', status: 'Livre', marcacao: null },
        { hora: '10:30', status: 'Livre', marcacao: null },
        { hora: '11:00', status: 'Livre', marcacao: null },
        { hora: '11:30', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '11:00', status: 'Livre', marcacao: null },
        { hora: '11:30', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '11:00', status: 'Livre', marcacao: null },
        { hora: '11:30', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
        { hora: '11:00', status: 'Livre', marcacao: null },
        { hora: '11:30', status: 'Livre', marcacao: null },
        { hora: '12:00', status: 'Livre', marcacao: null },
      ]
    },
    {
      data: '2019-08-25', maximoEncaixes: 0, agendamentos: [
        { hora: '10:00', status: 'Livre', marcacao: null },
        { hora: '10:30', status: 'Ocupado', marcacao: { nome: 'Arthur Ferreira', cpf: '' } },
        { hora: '11:00', status: 'Ocupado', marcacao: { nome: 'Arthur Ferreira', cpf: '' } },
        { hora: '11:30', status: 'Ocupado', marcacao: { nome: 'Arthur Ferreira', cpf: '' } },
        { hora: '12:00', status: 'Ocupado', marcacao: { nome: 'Arthur Ferreira', cpf: '' } },
      ]
    },
  ];
  constructor() {
  }

  ngOnInit() {

  }
}
