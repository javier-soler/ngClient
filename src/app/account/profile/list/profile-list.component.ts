import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../service/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseListComponent } from 'src/app/common/component/base-list.component';


@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html',
    styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent extends BaseListComponent<Profile> {
    constructor(_srv: ProfileService,
        _router: Router,
        _activeRoute: ActivatedRoute) {
        super(_srv, _router, _activeRoute);
    }
}
