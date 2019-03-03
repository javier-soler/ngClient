import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Profile } from '../profile';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-profile-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.less']
})
export class ProfileFormComponent implements OnInit {

    @Input() profile: Profile;
    @Output() submittEmitter: EventEmitter<Profile> = new EventEmitter();
    profileForm = this.fb.group({
        id: [''],
        name: ['', [Validators.required, Validators.maxLength(10)]]
    });
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.profileForm.patchValue(this.profile);
    }

    submitForm(): void {
        if (this.profileForm.valid) {
            this.submittEmitter.emit(this.profileForm.value);
        }
    }

    get name() {
        return this.profileForm.get('name');
    }

}
