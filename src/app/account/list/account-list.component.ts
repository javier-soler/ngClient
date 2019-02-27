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
    public loading = true;
    constructor(private accSrv: AccountService, private router: Router, private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        this.loadUsers();
    }

    loadUsers(): void {
        this.loading = true;
        this.activeRoute.queryParams.subscribe(params => {
            const pageNum = +params['page'] || 1;
            this.accSrv.getList(pageNum).subscribe(p => {
                this.accounts = p.data;
                this.page = p.page;
                this.loading = false;
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

    deleteConfimationResponse(a: number) {
        if (a === CONFIRMATION_YES) {
            this.accSrv.delete(this.selected)
                .subscribe(r => {
                    this.showDeleteMessage = false;
                    this.loadUsers();
                });
        } else {
            this.showDeleteMessage = false;
        }
    }
}
