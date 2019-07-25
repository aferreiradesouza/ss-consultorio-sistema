import { Injectable } from '@angular/core';
import { AjaxService } from './ajax.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(public ajaxService: AjaxService) {}

    async logar(params) {
        const url = `${environment.login}login`;
        return await this.ajaxService.post<any>(url, params);
    }
}
