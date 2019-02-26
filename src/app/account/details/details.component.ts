import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

//rxjs
import { Observable, of } from 'rxjs';
import { AccountService } from '../service/account.service';
import { Account } from '../account';


@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.less']
})
export class AccountDetailsComponent implements OnInit {

    acc: Account;
    isCreate = false;
    constructor(private router: Router, private route: ActivatedRoute, private srv: AccountService) { }

    ngOnInit() {
        if (this.route.snapshot.data.isNew) {
            this.isCreate = true;
            this.acc = new Account(-1, 1, '', '', '', '', '', 0);
        } else {
            const id = this.route.snapshot.paramMap.get('id');
            this.srv.findById(+id).subscribe(a => this.acc = a);
        }
    }

    saveObject(a: Account): void {
        if (this.isCreate) {
            this.srv.create(a).subscribe(x => {
                this.router.navigate(['/admin/account.module']);
            });
        } else {
            this.srv.update(a);

            this.router.navigate(['/admin/account.module']);
        }
    }

}
