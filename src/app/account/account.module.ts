import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AccountDetailsComponent } from './details/details.component';
import { AccountFormComponent } from './form/account-form.component';
import { AccountListComponent } from './list/account-list.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
    declarations: [
        AccountFormComponent,
        AccountDetailsComponent,
        AccountListComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        AccountRoutingModule
    ]
})
export class AccountModule { }
