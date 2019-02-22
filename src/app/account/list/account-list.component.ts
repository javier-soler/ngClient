import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
    selector: 'app-acc-list',
    templateUrl: './account-list.component.html',
    styleUrls: ['./account-list.component.less']
})
export class AccountListComponent implements OnInit {

    accounts: Account[];
    selected: Account;
    constructor(private accSrv: AccountService, private router: Router) { }

    ngOnInit() {
        this.loadUsers();
    }

    loadUsers(): void {
        this.accSrv.getAll().subscribe(list => this.accounts = list);
    }

    selectOne(u): void {
        this.selected = u;
    }

    editOne(u): void {
        this.router.navigate(['/admin/account.module/edit/:id', { id: u.id }]);
    }
}
