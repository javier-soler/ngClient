import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
    declarations: [PaginatorComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [PaginatorComponent]
})
export class VoyVasCommonModule { }
