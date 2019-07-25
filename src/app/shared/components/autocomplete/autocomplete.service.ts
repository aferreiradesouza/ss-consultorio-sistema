import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AjaxService } from '../../services/ajax.service';

@Injectable({
    providedIn: 'root'
})

export class AutoCompleteService {
    constructor(public ajaxService: AjaxService) {}

    buscarResult() {
        const url = `${environment.baseUrl}busca`;
        return this.ajaxService.get<any>(url);
    }
}
