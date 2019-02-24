import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../service/profile.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html',
    styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {

    public list: Profile[];
    constructor(private srv: ProfileService, private router: Router) { }

    ngOnInit() {
        this.srv.getAll().subscribe(el => this.list = el);
    }

}
