import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'ss-card',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {

    @Input() header: string;
    @Input() label: string;
    @Input() value: any;
    @Input() type?: string;

    constructor(public router: Router) { }

    ngOnInit() {
    }

    getType() {
        const ret = [];

        if (this.type === 'warning') {ret.push('bg-warning'); }
        if (this.type === 'danger') {ret.push('bg-danger'); }
        if (this.type === 'success') {ret.push('bg-success'); }

        return ret;
    }
}
