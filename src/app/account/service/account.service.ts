import { Injectable } from '@angular/core';
import { BaseRestService } from 'src/app/http/rest/base-rest.service';
import { Account } from '../account';
import { HttpClient } from '@angular/common/http';
import { AppCtxService } from 'src/app/context/app-context.service';


@Injectable({
    providedIn: 'root'
})
export class AccountService extends BaseRestService<Account>{
    constructor(_http: HttpClient, _ctx: AppCtxService) {
        super('accounts', '/user/accounts', _http, _ctx, 'simpleAccount');
    }
}
