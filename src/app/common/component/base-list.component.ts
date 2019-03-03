import { ActivatedRoute, Router } from '@angular/router';
import { BaseRestService } from 'src/app/http/rest/base-rest.service';
import { Page } from 'src/app/http/service/page';
import { CONFIRMATION_YES } from '../prompts/confirmation-dialog.component';
import { OnInit } from '@angular/core';

export class BaseListComponent<T extends { id: number }> implements OnInit {
    public list: T[];
    public selected: T;
    public page: Page;
    public showDeleteMessage = false;
    public loading = true;

    constructor(private ngUri: string, private srv: BaseRestService<T>, private router: Router, private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        this.loadUsers();
    }

    loadUsers(): void {
        this.loading = true;
        this.activeRoute.queryParams.subscribe(params => {
            const pageNum = +params['page'] || 1;
            this.srv.getList(pageNum).subscribe(p => {
                this.list = p.data;
                this.page = p.page;
                this.loading = false;
            });
        });
    }

    goToPage(i: number): void {
        this.router.navigate([this.ngUri], { queryParams: { page: i } });
    }

    deleteObject(a: T): void {
        this.selected = a;
        this.showDeleteMessage = true;
    }

    deleteConfimationResponse(a: number) {
        if (a === CONFIRMATION_YES) {
            this.srv.delete(this.selected)
                .subscribe(r => {
                    this.showDeleteMessage = false;
                    this.loadUsers();
                });
        } else {
            this.showDeleteMessage = false;
        }
    }
}