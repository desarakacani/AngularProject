import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

    public showClass = false;

    constructor() {
    }

    ngOnInit() {
    }

    showMenu() {
        this.showClass = !this.showClass;
    }

}
