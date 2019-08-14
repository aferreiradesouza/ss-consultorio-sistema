import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class CalendarioService {

    constructor() { }

    criarArray(numero: number): number[] {
        return ' '.repeat(numero).split('').map((e, index) => index++);
    }

    formatarDay(day: number) {
        switch (day) {
            case 0:
                return { extenso: 'Domingo', curto: 'Dom' };
            case 1:
                return { extenso: 'Segunda-feira', curto: 'Seg' };
            case 2:
                return { extenso: 'Terça-feira', curto: 'Ter' };
            case 3:
                return { extenso: 'Quarta-feira', curto: 'Qua' };
            case 4:
                return { extenso: 'Quinta-feita', curto: 'Qui' };
            case 5:
                return { extenso: 'Sexta-feita', curto: 'Sex' };
            case 6:
                return { extenso: 'Sábado', curto: 'Sáb' };
        }
    }

    formatarMes(mes: number) {
        switch (mes) {
            case 0:
                return { extenso: 'Janeiro', curto: 'Jan' };
            case 1:
                return { extenso: 'Fevereiro', curto: 'Fev' };
            case 2:
                return { extenso: 'Março', curto: 'Mar' };
            case 3:
                return { extenso: 'Abril', curto: 'Abr' };
            case 4:
                return { extenso: 'Maio', curto: 'Mai' };
            case 5:
                return { extenso: 'Junho', curto: 'Jun' };
            case 6:
                return { extenso: 'Julho', curto: 'Jul' };
            case 7:
                return { extenso: 'Agosto', curto: 'Ago' };
            case 8:
                return { extenso: 'Setembro', curto: 'Set' };
            case 9:
                return { extenso: 'Outubro', curto: 'Out' };
            case 10:
                return { extenso: 'Novembro', curto: 'Nov' };
            case 11:
                return { extenso: 'Dezembro', curto: 'Dez' };
        }
    }

    montarHorarios() {
        const horarios = this.criarArray(48);
        let count = 1;
        return horarios.map(h => {
            return { hora: `${h % 2 === 0 ? `${h / 2}:00` : `${h - count++}:30`}` };
        });
    }

    montarDias() {
        const diasLength: any[] = this.criarArray(7);
        const diaAtual: any = moment(new Date(), 'YYYY-MM-DD');
        const dataAtual: any = moment();
        return diasLength.map((d, index) => {
            return  {
                dia: diaAtual.add('days', index === 0 ? 0 : 1).format('DD'),
                data: this.formatarDay(new Date(dataAtual.add('days', index === 0 ? 0 : 1)).getDay())
            };
        });
    }

    hourToDecimal(hora) {
        const horaAtual = hora;
        const arr: any[] = horaAtual.split(':');
        const dec = parseInt(((arr[1] / 6) * 10).toString(), 10);
        return parseFloat(parseInt(arr[0], 10) + '.' + (dec < 10 ? '0' : '') + dec);
    }

    decimalToHour(decimal) {
    let decimalTime = decimal * 60 * 60;
    const hours = Math.floor((decimalTime / (60 * 60)));
    decimalTime = decimalTime - (hours * 60 * 60);
    const minutes = Math.floor((decimalTime / 60));
    return `${hours.toString().length === 1 ? `${0}${hours}` : hours}:${minutes.toString().length === 1 ? `0${minutes}` : `${minutes}`}`;
    }
}
