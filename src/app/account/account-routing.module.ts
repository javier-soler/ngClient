import { NgModule } from '@angular/core';
import { AccountDetailsComponent } from './details/details.component';
import { AccountListComponent } from './list/account-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfileListComponent } from './profile/list/profile-list.component';
import { ProfileDetailsComponent } from './profile/details/details.component';
import { AccountComponent } from './account.component';

const routes: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [            
            { path: 'profiles', component: ProfileListComponent },
            { path: 'profiles/create', component: ProfileDetailsComponent, data: { isNew: true } },
            { path: 'profiles/:id', component: ProfileDetailsComponent, data: { isNew: false } },
            { path: '', component: AccountListComponent },
            { path: 'create', component: AccountDetailsComponent, data: { isNew: true } },
            { path: ':id', component: AccountDetailsComponent, data: { isNew: false } }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
