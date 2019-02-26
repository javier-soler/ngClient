import { Injectable } from '@angular/core';
import { Account } from '../account';
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs//operators';
import { RestClientService } from '../../http/restclient.service';
import { PageableResponse } from '../../http/pageable-response';
import { RestClient } from 'src/app/http/rest-client';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class AccountService {

    list: Account[];
    private client: RestClient<Account>;

    constructor(private http: HttpClient) {
        this.client = new RestClient<Account>('/accounts', http);
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

    update(account: Account) { }

    delete(user: Account) {
     }



}
