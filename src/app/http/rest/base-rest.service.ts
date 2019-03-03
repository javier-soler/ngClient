import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppCtxService } from '../../app-context.service';
import { PageableResponse } from '../service/pageable-response';
import { RestClient } from '../service/rest-client';


@Injectable({
    providedIn: 'root'
})
export class BaseRestService<T extends { id: number }> {
    private list: T[];
    private client: RestClient<T>;

    constructor(embeddedKey: string, uri: string, http: HttpClient, private ctx: AppCtxService) {
        this.client = new RestClient<T>(embeddedKey, uri, ctx, http);
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
