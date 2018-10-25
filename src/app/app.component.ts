import {Component, OnInit, Input} from '@angular/core';
import {UsersService} from './services/users.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    title = 'my-app';

    public users = [];
    public totalPages = [];
    public currentUser;
    loadingTable = false;

    constructor(private _usersService: UsersService) {
    }

    ngOnInit() {
        this.loadingTable = true;
        this._usersService.getUsers(1)
            .subscribe(users => {
                this.users = users.data;
                this.totalPages = Array.apply(null, {length: users.total_pages}).map(Number.call, Number);
                this.loadingTable = false;
            });
    }

    getUsers(page) {
        this.loadingTable = true;
        this._usersService.getUsers(page).subscribe(
            users => {
                this.users = users.data;
                this.loadingTable = false;
            }
        )
    }

    setCurrentUser(index) {
        this.currentUser = index;
    }
}
