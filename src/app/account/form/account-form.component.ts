import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../account';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-account-form',
    templateUrl: './account-form.component.html',
    styleUrls: ['./account-form.component.less']
})
export class AccountFormComponent implements OnInit {
    @Input() acc: Account;
    @Output() submittEmitter: EventEmitter<Account> = new EventEmitter();
    accountForm = this.fb.group({
        id: [''],
        userName: ['', Validators.required],
        password: [''],
        rePassword: [''],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        age: ['', [Validators.required, Validators.min(1), Validators.max(130)]]
    });

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.accountForm.patchValue({ rePassword: '', ...this.acc });
    }

    submitForm(): void {
        if (this.accountForm.valid) {
            this.submittEmitter.emit(this.accountForm.value);
        }
    }

    get userName() {
        return this.accountForm.get('userName');
    }

    get password() {
        return this.accountForm.get('password');
    }

    get age() {
        return this.accountForm.get('age');
    }

}
