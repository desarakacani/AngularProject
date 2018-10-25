import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.sass']
})
export class DropdownComponent implements OnInit {

    show = false;
    @Input() options: any;
    selectedItem: any;
    items: [any];
    buttonColor;

    constructor() {
    }

    ngOnInit() {
        if (this.options.items.length > 0) {
            this.items = this.options.items;
            this.buttonColor = this.options.buttonColor;
            this.selectedItem = this.items[0];
        }
    }

    showDropdown() {
        this.show = !this.show;
    }

    selectItem(item) {
        this.selectedItem = item;
        this.show = false;
    }

}
