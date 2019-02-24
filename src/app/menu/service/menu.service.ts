import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class MenuService {

    menu = [
        {
            title: 'Account Management', items: [
                { path: 'admin/account.module', title: 'Accounts' },
                { path: 'admin/account.module/create', title: 'Create New' }
            ]
        },
        {
            title: 'Security Profiles', items: [
                { path: 'admin/account.module/profiles', title: 'Security Profiles' },
                { path: 'admin/account.module/profiles/create', title: 'Create Security Profiles' }
            ]
        }
    ];

    constructor() { }

    getMenu(): Observable<any> {
        return of(this.menu);
    }
}
