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
  public dataAtual = new Date();
  public posicaoPaleta;
  public dias;
  public maxAgendamentos: number;

  @Input() data: any[];

  constructor(public calendarioService: CalendarioService) { }

  ngOnInit() {
    this.dias = this.calendarioService.montarDias();
    this.verificarTotalDeAgendamentos();
    console.log(this.maxAgendamentos);
  }

  obterArray(num) {
    return this.calendarioService.criarArray(num);
  }

  obterHoras() {
    const horasLength = 48;
    const horarios = this.calendarioService.criarArray(horasLength);
    return horarios;
  }

  obterAgendamentos(i): any[] {
    const ret = [];
    this.data.forEach(dias => {
      if (moment(dias.data, 'YYYY-MM-DD').format('DD') === this.dias[i].dia) {
        ret.push(...dias.agendamentos);
      }
    });
    if (ret.length < this.maxAgendamentos) {
      ret.push(...this.calendarioService.criarArray(this.maxAgendamentos - ret.length));
    }
    return ret;
  }

  verificarTotalDeAgendamentos(): void {
    let count = 0;
    this.data.forEach(data => {
      if (data.agendamentos.length > count) {
        count = data.agendamentos.length;
      }
    });
    this.maxAgendamentos = count;
  }

  obterClassesAgendamento(item) {
    if (typeof item === 'number') { return ['disabled']; }
    const ret = [];
    if (item.type === 'Livre') { ret.push('livre'); }
    return ret;
  }

  isNumber(val) { return typeof val === 'number'; }
}
