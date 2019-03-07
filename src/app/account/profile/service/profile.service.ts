import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppCtxService } from 'src/app/context/app-context.service';
import { BaseRestService } from 'src/app/http/rest/base-rest.service';
import { Profile } from '../profile';

@Injectable({
    providedIn: 'root'
})
export class ProfileService extends BaseRestService<Profile> {
    constructor(_http: HttpClient, _ctx: AppCtxService) {
        super('profiles', '/user/profiles', _http, _ctx);
    }

    getAll(): Observable<Profile[]> {
        return this.client.getList(0, 1000).pipe(map(p => p.data));
    }
}
