import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppCtxService } from 'src/app/context/app-context.service';


@Injectable({
    providedIn: 'root'
})
export class MenuService {
    menu = [
        {
            title: 'Account Management', items: [
                { path: 'web/account', title: 'Accounts' },
                { path: 'web/account/create', title: 'Create New' }
            ]
        },
        {
            title: 'Security Profiles', items: [
                { path: 'web/account/profiles', title: 'Security Profiles' },
                { path: 'web/account/profiles/create', title: 'Create Security Profiles' }
            ]
        }
    ];

    constructor(ctx: AppCtxService) { }

    getMenu(): Observable<any> {
        return of(this.menu);
    }
}
