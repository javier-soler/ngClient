import { Injectable } from '@angular/core';
import { Profile } from '../profile';
import { Observable, of } from 'rxjs';
import { BaseRestService } from 'src/app/http/rest/base-rest.service';
import { HttpClient } from '@angular/common/http';
import { AppCtxService } from 'src/app/app-context.service';

@Injectable({
    providedIn: 'root'
})
export class ProfileService extends BaseRestService<Profile> {
    constructor(_http: HttpClient, _ctx: AppCtxService) {
        super('profiles', '/user/profiles', _http, _ctx);
    }
}
