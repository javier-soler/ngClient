import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.less']
})
export class PaginatorComponent implements OnInit {

    @Input() numPages: number;
    @Input() currentPage: number;
    pages = [];
    @Output() pageNavigator = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
        this.generatePages();
    }

    generatePages(): void {
        this.pages = Array.from(Array(this.numPages).keys())
            .map(i => {
                return {
                    index: i + 1,
                    current: i === (this.currentPage - 1)
                };
            });
    }

    goToPage(i: number): void {
        this.pageNavigator.emit(i);
    }

}
