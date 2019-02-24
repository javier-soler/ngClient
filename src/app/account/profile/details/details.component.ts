import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ProfileService } from '../service/profile.service';
import { Profile } from '../profile';


@Component({
    selector: 'app-profile-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.less']
})
export class ProfileDetailsComponent implements OnInit {

    profile: Profile;
    isCreate = false;
    constructor(private route: ActivatedRoute, private srv: ProfileService) { }

    ngOnInit() {
        if (this.route.snapshot.data.isNew) {
            this.isCreate = true;
            this.profile = new Profile(-1, 1, 'Nameless');
        } else {
            const id = this.route.snapshot.paramMap.get('id');
            this.srv.getAll().subscribe(l => {
                this.profile = l.find(x => x.id === +id);
            });
        }
    }

    saveObject(p: Profile): void {
        if (this.isCreate) {
            this.srv.create(p);
        } else {
            this.srv.update(p);
        }
    }

}
