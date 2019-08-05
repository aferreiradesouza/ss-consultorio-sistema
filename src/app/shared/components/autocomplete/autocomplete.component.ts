import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AutoCompleteService } from './autocomplete.service';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
    selector: 'ss-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss'],
    providers: [AutoCompleteService]
})

export class AutoCompleteComponent implements OnInit {

    public data = '';
    public timeout: any;
    public resultado: any;
    public showSearch = false;

    @Input() placeholder = '';

    constructor(public router: Router, public autoCompleteService: AutoCompleteService) { }

    ngOnInit() {
    }

    buscar(data: string) {
        clearTimeout(this.timeout);
        if (data === '') {
            this.resultado = null;
            return;
        }
        this.timeout = setTimeout(() => {
            this.autoCompleteService.buscarResult().then((response) => {
                this.resultado = response;
                this.showSearch = true;
            }).catch((err) => {
                console.log(err);
            });
        }, 500);
    }

    blur() {
        this.showSearch = false;
    }

    obterArray(numeroLength: number) {
        return this.autoCompleteService.criarArray(numeroLength);
    }

    showItensLoading(data): boolean {
        return !!data;
    }
}
