import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PageableResponse } from './pageable-response';
import { Page } from './page';

@Injectable({
    providedIn: 'root'
})
export class RestClientService<T> {

    constructor(private http: HttpClient) { }

    getList(path: string, pageNum = 0): Observable<PageableResponse<T>> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'my-auth-token'
            }),
            params: {
                size: '1',
                page: String(pageNum)
            }
        };

        return this.http.get<any>('http://localhost:9020' + path, httpOptions).pipe(map(d => {
            const p = d.page;
            const page = new Page(p.number, p.size, p.totalElements, p.totalPages);
            return new PageableResponse<T>(d._embedded.accounts, d._links, page);
        }));
    }

    getSingleObject(path: string): Observable<T> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'my-auth-token'
            })
        };
        return this.http.get<T>('http://localhost:9020' + path, httpOptions);
    }
}
