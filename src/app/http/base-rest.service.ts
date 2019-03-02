import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppCtxService } from '../app-context.service';
import { PageableResponse } from './pageable-response';
import { RestClient } from './rest-client';


@Injectable({
    providedIn: 'root'
})
export class BaseRestService<T extends { id: number }> {
    private list: T[];
    private client: RestClient<T>;

    constructor(private uri: string, private http: HttpClient, private ctx: AppCtxService) {
        this.client = new RestClient<T>(ctx, this.uri, http);
    }

    getList(page = 1): Observable<PageableResponse<T>> {
        return this.client.getList(page - 1, 3);
    }


    findById(id: number): Observable<T> {
        return this.client.getSingleObject(id);
    }

    create(o: T) {
        return this.client.create(o);
    }

    update(o: T) {
        return this.client.update(o);
    }

    delete(o: T): Observable<boolean> {
        return this.client.delete(+o.id);
    }
}
