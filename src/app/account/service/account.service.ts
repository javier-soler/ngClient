import { Injectable } from '@angular/core';
import { Account } from '../account';
import { Observable, of } from 'rxjs';
import { concatMap, timeout, catchError, delay } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AccountService {

    list: Account[] = [new Account(1, 'john', 'abc', 'John', 'Doe', 'john@example.com', 18),
    new Account(2, 'jane', 'abc', 'Jane', 'Doe', 'jane@example.com', 20)];

    constructor() {
        console.log('Here it comes Pork!')
    }

    getAll(): Observable<Account[]> {
        return of(this.list).pipe(delay(1000));
    }

    create(account: Account) {
        console.log('Create a new account' + account);
        this.list.push(account);
    }

    update(account: Account) { }

    delete(user: Account) { }



}
