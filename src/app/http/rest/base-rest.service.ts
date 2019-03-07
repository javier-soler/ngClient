import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppCtxService } from '../../context/app-context.service';
import { PageableResponse } from '../service/pageable-response';
import { RestClient } from '../service/rest-client';


@Injectable({
    providedIn: 'root'
})
export class BaseRestService<T extends { id: number }> {
    private list: T[];
    protected client: RestClient<T>;

    constructor(embeddedKey: string, uri: string, http: HttpClient, private ctx: AppCtxService, private projection: String = null) {
        this.client = new RestClient<T>(embeddedKey, uri, ctx, http, this.projection);
    }

    getList(page = 1): Observable<PageableResponse<T>> {
        return this.client.getList(page - 1, 3);
    }

    findById(id: number): Observable<T> {
        return this.client.getSingleObject(id);
    }

    create(o: T) {
        //fixme tenantid cannot be hardcoded ok?
        return this.client.create({ ...o, tenantId: 1 });
    }

    update(o: T) {
        return this.client.update(o);
    }

    delete(o: T): Observable<boolean> {
        return this.client.delete(+o.id);
    }
}
