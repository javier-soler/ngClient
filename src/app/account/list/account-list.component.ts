import { Component } from '@angular/core';
import { BaseListComponent } from 'src/app/common/component/base-list.component';
import { Account } from '../account';
import { AccountService } from '../service/account.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-acc-list',
    templateUrl: './account-list.component.html',
    styleUrls: ['./account-list.component.less']
})
export class AccountListComponent extends BaseListComponent<Account>{
    constructor(_srv: AccountService,
        _router: Router,
        _activeRoute: ActivatedRoute) {
        super('admin/account.module', _srv, _router, _activeRoute);
    }
}
