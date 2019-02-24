import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Profile } from '../profile';

@Component({
    selector: 'app-profile-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.less']
})
export class ProfileFormComponent implements OnInit {

    @Input() profile: Profile;
    @Output() submittEmitter: EventEmitter<Profile> = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

    submitForm(): void {
        this.submittEmitter.emit(this.profile);
    }

}
