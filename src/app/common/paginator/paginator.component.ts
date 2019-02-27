import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.less']
})
export class PaginatorComponent implements OnChanges {

    @Input() numPages: number;
    @Input() currentPage: number;
    @Output() pageNavigator = new EventEmitter<number>();


    public pages = [];
    public hasPrev = false;
    public hasNext = false;

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        this.generatePages();
    }

    generatePages(): void {
        this.pages = Array.from(Array(this.numPages).keys())
            .map(i => {
                return {
                    index: i,
                    current: i === this.currentPage
                };
            });
        if (this.pages.length > 1) {
            this.hasPrev = this.currentPage > 0;
            this.hasNext = this.currentPage < this.numPages - 1;
        }
    }

    goToPage(i: number): void {
        this.pageNavigator.emit(i + 1);
    }

}
