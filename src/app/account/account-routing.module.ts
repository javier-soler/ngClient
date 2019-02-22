import { NgModule } from '@angular/core';
import { AccountDetailsComponent } from './details/details.component';
import { AccountListComponent } from './list/account-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'admin/account.module', component: AccountListComponent },
    { path: 'admin/account.module/edit/:id', component: AccountDetailsComponent, data: { isNew: false } },
    { path: 'admin/account.module/create', component: AccountDetailsComponent, data: { isNew: true } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
