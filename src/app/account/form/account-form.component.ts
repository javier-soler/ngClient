import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../account';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../profile/profile';
import { ProfileService } from '../profile/service/profile.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-account-form',
    templateUrl: './account-form.component.html',
    styleUrls: ['./account-form.component.less']
})
export class AccountFormComponent implements OnInit {
    @Input() acc: Account;
    @Output() submittEmitter: EventEmitter<Account> = new EventEmitter();
    profiles$: Observable<Profile[]>;

    accountForm = this.fb.group({
        id: [''],
        userName: ['', Validators.required],
        plainTextPassword: [''],
        rePassword: [''],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        age: ['', [Validators.required, Validators.min(1), Validators.max(130)]],
        profileId: ['', Validators.required]
    });

    constructor(private fb: FormBuilder, private profileSrv: ProfileService) { }

    ngOnInit() {
        this.accountForm.patchValue({ rePassword: '', ...this.acc });
        this.profiles$ = this.profileSrv.getAll();
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
