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
  public dataAtual = moment().format('YYYY-MM-DD');
  public posicaoPaleta;
  public dias;
  public maxAgendamentos: number;

  @Input() data: any[];

  constructor(public calendarioService: CalendarioService) { }

  ngOnInit() {
    this.dias = this.calendarioService.montarDias(this.data);
    console.log(this.dias);
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
    return ret;
  }

  obterClassesAgendamento(item) {
    if (typeof item === 'number') { return ['disabled']; }
    const ret = [];
    if (item.status === 'Livre') { ret.push('livre'); }
    return ret;
  }

  isNumber(val) { return typeof val === 'number'; }
}
