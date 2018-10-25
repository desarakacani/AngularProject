import {Component, OnInit, Input, EventEmitter, Output, SimpleChanges, SimpleChange} from '@angular/core';

const CHUNK = 2;

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {

    currentPage = 1;
    currentChunk = CHUNK;
    left = false;
    right = false;


    @Input() totalPages: [number];
    @Output() getUsersEvent: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
        //noinspection TypeScriptUnresolvedVariable
        const total: SimpleChange = changes.totalPages;
        if (total.currentValue.length > CHUNK) {
            this.right = true;
        }
    }

    next() {
        this.currentPage += 1;
        if (this.currentPage % CHUNK == 1) {
            this.currentChunk += CHUNK;
        }
        this.checkRightLeft();
        this.getUsersEvent.emit(this.currentPage);
    }

    previous() {
        this.currentPage -= 1;
        if (this.currentPage % CHUNK == 0) {
            this.currentChunk -= CHUNK;
        }

        this.checkRightLeft();
        this.getUsersEvent.emit(this.currentPage);
    }

    goToPage(page) {
        this.currentPage = page;
        this.getUsersEvent.emit(this.currentPage);
    }

    checkRightLeft() {
        if (this.currentPage > CHUNK) {
            this.right = false;
            this.left = true;
        }

        if (this.currentPage <= CHUNK) {
            this.right = true;
            this.left = false;
        }
    }

    checkPage(page): boolean {
        return (page + 1) <= this.currentChunk && (page + 1) > (this.currentChunk - CHUNK)
    }
}
