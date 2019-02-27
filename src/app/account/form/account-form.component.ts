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
        this.acc = Object.create(this.acc);
    }

    submitForm(): void {
        this.submittEmitter.emit(this.acc);
    }

}
