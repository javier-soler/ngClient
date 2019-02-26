import { Component, Input, Output, EventEmitter } from '@angular/core';

export const CONFIRMATION_YES = 1;
export const CONFIRMATION_NO = 2;

@Component({
    templateUrl: './confirmation-dialog.component.html',
    selector: 'app-confirmation'
})
export class ConfirmationDialogComponent {
    @Input() title = 'Message';
    @Input() message: string;
    @Input() show = false;
    @Output() action = new EventEmitter<number>()

    sayYes(): void {
        this.action.emit(CONFIRMATION_YES);
    }

    sayNo(): void {
        this.action.emit(CONFIRMATION_NO);
    }
}