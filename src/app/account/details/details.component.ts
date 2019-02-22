import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
    constructor(private route: ActivatedRoute, private srv: AccountService) { }

    ngOnInit() {
        if (this.route.snapshot.data.isNew) {
            this.isCreate = true;
            this.acc = new Account(-1, '', '', '', '', '', 0);
        } else {
            const id = this.route.snapshot.paramMap.get('id');
            this.srv.getAll().subscribe(l => {
                this.acc = l.find(x => x.id === +id);
            });
        }
    }

    saveObject(a: Account): void {
        if (this.isCreate) {
            this.srv.create(a);
        } else {
            this.srv.update(a);
        }
    }

}
