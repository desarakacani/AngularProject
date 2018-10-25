import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit {

    firstDropDown: any;
    secondDropDown: any;
    thirdDropDown: any;

    constructor() {
    }

    ngOnInit() {
        this.firstDropDown = {
            items: [
                {name: "all"},
                {name: "first"}
            ],
            buttonColor: 'text-danger'
        };

        this.secondDropDown = {
            items: [
                {name: "all"},
                {name: "second"}
            ],
            buttonColor: 'text-success'
        };

        this.thirdDropDown = {
            items: [
                {name: "all"},
                {name: "third"}
            ],
            buttonColor: 'text-primary'
        };

    }

}
