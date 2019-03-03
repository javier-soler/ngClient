import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountDetailsComponent } from './details/details.component';
import { AccountFormComponent } from './form/account-form.component';
import { AccountListComponent } from './list/account-list.component';
import { AccountRoutingModule } from './account-routing.module';
import { ProfileListComponent } from './profile/list/profile-list.component';
import { ProfileFormComponent } from './profile/form/form.component';
import { ProfileDetailsComponent } from './profile/details/details.component';



import { VoyVasHttpModule } from '../http/voyvas-http.module';
import { VoyVasCommonModule } from '../common/voyvas-common.module';
import { AccountComponent } from './account.component';

@NgModule({
    declarations: [
        AccountComponent,
        AccountFormComponent,
        AccountDetailsComponent,
        AccountListComponent,
        ProfileListComponent,
        ProfileFormComponent,
        ProfileDetailsComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        HttpClientXsrfModule,
        FormsModule,
        AccountRoutingModule,
        VoyVasHttpModule,
        VoyVasCommonModule,
        ReactiveFormsModule
    ]
})

export class AccountModule { }
