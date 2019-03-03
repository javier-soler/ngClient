import { Injectable } from '@angular/core';
import { BaseRestService } from 'src/app/http/rest/base-rest.service';
import { Account } from '../account';
import { AppCtxService } from 'src/app/app-context.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class AccountService extends BaseRestService<Account>{
    constructor(_http: HttpClient, _ctx: AppCtxService) {
        super('accounts', '/user/accounts', _http, _ctx);
    }
}
