import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private _url = 'https://reqres.in/api/users';

    constructor(private http: HttpClient) {
    }

    getUsers(page) : Observable<any> {
        let url;
        if (page) {
            url = this._url + '?page=' + page;
        }

        else {
            url = this._url;
        }

        return this.http.get(url);
    }
}
