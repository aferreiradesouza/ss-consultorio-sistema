import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalendarioService {

    constructor() { }

    criarArray(numero: number): string[] {
        return ' '.repeat(numero).split('');
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
}
