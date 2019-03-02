import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Principal } from './Principal';

@Injectable({
    providedIn: 'root'
})
export class AppCtxService {
    baseUri: string;
    principal: Principal;

    constructor(private http: HttpClient) {
        this.onInit();
    }

    onInit(): void {
        this.baseUri = '';
        this.http.get<Principal>(this.baseUri + '/user/me', this.buildHttpOptions())
            .subscribe(r => this.principal = r);
    }

    buildHttpOptions(additional?): {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
    } {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            ...additional
        };
    }
}
