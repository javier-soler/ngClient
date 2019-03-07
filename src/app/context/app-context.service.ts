import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Principal } from './Principal';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AppCtxService {
    baseUri: string;
    principal: Principal;

    constructor(private http: HttpClient) {
    }

    getPrincipal(): Observable<Principal> {
        this.baseUri = '';
        return this.http.get<Principal>(
            this.baseUri + '/user/me', this.buildHttpOptions()
        )
            .pipe(map(r => {
                this.principal = r;
                return r;
            },
            error => console.log('error')            
            ));
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
