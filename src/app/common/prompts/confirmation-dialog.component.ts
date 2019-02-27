import { Component, Input, Output, EventEmitter } from '@angular/core';
export const CONFIRMATION_YES = 1;
export const CONFIRMATION_NO = 2;
declare var $: any;

@Component({
    templateUrl: './confirmation-dialog.component.html',
    selector: 'app-confirmation'
})
export class ConfirmationDialogComponent {
    @Input() title = 'Message';
    @Input() message: string;
    @Input() yesLabel = 'Proceed';
    @Input() noLabel = 'Cancel';
    @Input() hideOnAction = false;
    @Output() action = new EventEmitter<number>();

    @Input('show')
    set setShow(s: boolean) {
        if (s) {
            $('#confirmDeletionModal').show();
        } else {
            $('#confirmDeletionModal').hide();
        }
    }

    sayYes(): void {
        this.action.emit(CONFIRMATION_YES);
        this.hideOnActionCheck();
    }

    sayNo(): void {
        this.action.emit(CONFIRMATION_NO);
        this.hideOnActionCheck();
    }

    private hideOnActionCheck(): void {
        if (this.hideOnAction) {
            $('#confirmDeletionModal').hide();
        }
    }
}
