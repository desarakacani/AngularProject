import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    title = 'my-app';

    public users = [];
    public totalPages = [];
    public currentPage = 1;

    constructor(private _usersService: UsersService) {
    }

    ngOnInit() {
        this._usersService.getUsers(1)
            .subscribe(users => {
                this.users = users.data;
                this.totalPages = Array.apply(null, {length: users.total_pages}).map(Number.call, Number);
            });
    }

    getUsers(page) {
        this._usersService.getUsers(page).subscribe(
            users => {
                this.users = users.data;
            }
        )
    }

    next() {
        this.currentPage += 1;
        this.getUsers(this.currentPage)
    }

    previous() {
        this.currentPage -= 1;
        this.getUsers(this.currentPage)
    }

    goToPage(page) {
        this.currentPage = page;
        this.getUsers(page);
    }
}
