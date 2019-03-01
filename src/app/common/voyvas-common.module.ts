import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { ConfirmationDialogComponent } from './prompts/confirmation-dialog.component';
import { LoadingComponent } from './spinner/loading/loading.component';

@NgModule({
    declarations: [
        PaginatorComponent,
        ConfirmationDialogComponent,
        LoadingComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        PaginatorComponent,
        ConfirmationDialogComponent,
        LoadingComponent
    ]
})
export class VoyVasCommonModule { }
