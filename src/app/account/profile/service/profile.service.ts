import { Injectable } from '@angular/core';
import { Profile } from '../profile';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    list = [
        new Profile(1, 1, 'Employee'),
        new Profile(1, 1, 'Manager'),
        new Profile(1, 1, 'SuperAdmin')
    ];

    constructor() { }

    getAll(): Observable<Profile[]> {
        return of(this.list);
    }

    create(p: Profile) {
        this.list.push(p);
    }

    update(p: Profile) { }

    delete(user: Account) { }
}
