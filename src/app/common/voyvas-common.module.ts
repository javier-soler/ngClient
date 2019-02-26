import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { ConfirmationDialogComponent } from './prompts/confirmation-dialog.component';

@NgModule({
    declarations: [PaginatorComponent, ConfirmationDialogComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [PaginatorComponent, ConfirmationDialogComponent]
})
export class VoyVasCommonModule { }
