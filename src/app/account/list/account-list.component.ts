import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';
import { Account } from '../account';
import { Router, ActivatedRoute } from '@angular/router';
import { Page } from '../../http/page';
import { CONFIRMATION_YES } from 'src/app/common/prompts/confirmation-dialog.component';

@Component({
    selector: 'app-acc-list',
    templateUrl: './account-list.component.html',
    styleUrls: ['./account-list.component.less']
})
export class AccountListComponent implements OnInit {

    public accounts: Account[];
    public selected: Account;
    public page: Page;
    public showDeleteMessage = false;
    constructor(private accSrv: AccountService, private router: Router, private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        this.loadUsers();
    }

    loadUsers(): void {
        this.activeRoute.queryParams.subscribe(params => {
            const pageNum = +params['page'] || 1;
            this.accSrv.getList(pageNum).subscribe(p => {
                this.accounts = p.data;
                this.page = p.page;
            });
        });
    }

    goToPage(i: number): void {
        this.router.navigate(['/admin/account.module'], { queryParams: { page: i } });
    }

    deleteAccount(a: Account): void {
        this.selected = a;
        this.showDeleteMessage = true;
    }

    deleteAction(a) {
        if (a === CONFIRMATION_YES) {
            this.showDeleteMessage = false;
        } else {
            this.showDeleteMessage = false;
        }
    }
}
