import { Injectable } from '@angular/core';
import { Account } from '../account';
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs//operators';
import { RestClientService } from '../../http/restclient.service';
import { PageableResponse } from '../../http/pageable-response';
import { RestClient } from 'src/app/http/rest-client';
import { HttpClient } from '@angular/common/http';
import { AppCtxService } from 'src/app/app-context.service';


@Injectable({
    providedIn: 'root'
})
export class AccountService {

    list: Account[];
    private client: RestClient<Account>;

    constructor(private http: HttpClient, private ctx: AppCtxService) {
        this.client = new RestClient<Account>(ctx, '/accounts', http);
    }

    getList(page = 1): Observable<PageableResponse<Account>> {
        return this.client.getList('/accounts', page - 1, 3);
    }


    findById(id: number): Observable<Account> {
        return this.client.getSingleObject(id);
    }

    create(account: Account) {
        return this.client.create(account);
    }

    update(account: Account) {
        return this.client.update(account);
    }

    delete(account: Account): Observable<boolean> {
        return this.client.delete(account.id);
    }



}
