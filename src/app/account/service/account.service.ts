import { Injectable } from '@angular/core';
import { Account } from '../account';
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs//operators';
import { RestClientService } from '../../http/restclient.service';
import { PageableResponse } from '../../http/pageable-response';


@Injectable({
    providedIn: 'root'
})
export class AccountService {

    list: Account[];

    constructor(private client: RestClientService<Account>) {
        console.log('Here it comes Pork!');
    }

    getList(page = 1): Observable<PageableResponse<Account>> {
        return this.client.getList('/accounts', page - 1);
    }


    findById(id: number): Observable<Account> {
        return this.client.getSingleObject('/accounts/' + id);
    }

    create(account: Account) {
        this.list.push(account);
    }

    update(account: Account) { }

    delete(user: Account) { }



}
