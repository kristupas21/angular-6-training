import { Injectable } from "@angular/core";
import { UsersStore } from "./user.store";
import { timer } from "rxjs";
import { mapTo } from 'rxjs/operators';
import { mockUsers } from "./users.data";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private usersStore: UsersStore) {}

    getUsers() {
        timer(300)
            .pipe(mapTo(mockUsers))
            .subscribe(users => {
                this.usersStore.set(users);
            })
    }
}