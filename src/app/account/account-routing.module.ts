import { NgModule } from '@angular/core';
import { AccountDetailsComponent } from './details/details.component';
import { AccountListComponent } from './list/account-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfileListComponent } from './profile/list/profile-list.component';
import { ProfileDetailsComponent } from './profile/details/details.component';

const routes: Routes = [
    { path: 'admin/account.module', component: AccountListComponent },
    { path: 'admin/account.module/edit/:id', component: AccountDetailsComponent, data: { isNew: false } },
    { path: 'admin/account.module/create', component: AccountDetailsComponent, data: { isNew: true } },

    { path: 'admin/account.module/profiles', component: ProfileListComponent },
    { path: 'admin/account.module/profiles/edit/:id', component: ProfileDetailsComponent, data: { isNew: false } },
    { path: 'admin/account.module/profiles/create', component: ProfileDetailsComponent, data: { isNew: true } },
    {
        path: '',
        redirectTo: '/admin/account.module',
        pathMatch: 'full'
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
