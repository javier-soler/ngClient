import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProfileService } from '../service/profile.service';
import { Profile } from '../profile';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-profile-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.less']
})
export class ProfileDetailsComponent implements OnInit {

    profile: Profile;
    isCreate = false;
    loading = true;
    constructor(private router: Router, private route: ActivatedRoute, private srv: ProfileService) { }

    ngOnInit() {
        if (this.route.snapshot.data.isNew) {
            this.isCreate = true;
            this.profile = new Profile(-1, 1, 'Nameless');
            this.loading = false;
        } else {
            this.route.params.subscribe(p => {
                this.srv.findById(+p['id']).subscribe(p => {
                    this.profile = p;
                    this.loading = false;
                });
            });
        }
    }

    saveObject(p: Profile): void {
        let r: Observable<any>;
        if (this.isCreate) {
            r = this.srv.create(p);
        } else {
            r = this.srv.update(p);
        }
        r.subscribe(x => { this.router.navigate(['/admin/account.module/profiles']); })
    }

}
