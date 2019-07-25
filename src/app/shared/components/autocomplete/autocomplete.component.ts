import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AutoCompleteService } from './autocomplete.service';

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

    constructor(public router: Router, public autoCompleteService: AutoCompleteService) { }

    ngOnInit() {
    }

    buscar(data: string) {
        if (data === '') {
            this.resultado = null;
            return;
        }
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.autoCompleteService.buscarResult().then((response) => {
                this.resultado = response;
            }).catch((err) => {
                console.log(err);
            });
        }, 500);
    }
}
