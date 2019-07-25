import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AjaxService {

    constructor(private http: HttpClient,
    ) { }

    public async get<T>(url: string, params: { [param: string]: string | string[] } = {}) {
        return this.http.get<T>(url, { params }).toPromise();
    }
    public async post<T>(url: string, body: any = {}) {

        return this.http.post<T>(url, body).toPromise();
    }
}
