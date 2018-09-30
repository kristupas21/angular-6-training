import { QueryEntity } from "@datorama/akita";
import { UsersState, UsersStore } from "./user.store";
import { User } from "./user.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UsersQuery extends QueryEntity<UsersState, User> {
    constructor(protected store: UsersStore) {
        super(store);
    }
}