import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../account';

@Component({
    selector: 'app-account-form',
    templateUrl: './account-form.component.html',
    styleUrls: ['./account-form.component.less']
})
export class AccountFormComponent implements OnInit {

    @Input() acc: Account;
    @Output() submittEmitter: EventEmitter<Account> = new EventEmitter();
    constructor() { }

    ngOnInit() {
        this.acc = new Account(-1, '', '', '', '', '', 10);
    }

    submitForm(): void {
        this.submittEmitter.emit(this.acc);
    }

}
