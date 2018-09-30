import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../../akita/user.model";
import { UsersQuery } from "../../akita/user.query";
import { UsersService } from "../../akita/user.service";

@Component({
    selector: 'akita-user',
    template: `<p *ngFor="let user of users2">{{user.firstName}}</p>`
})
export class UserComponent implements OnInit {
    users2: User[];
    selectLoading: boolean;

    constructor(private uq: UsersQuery, private us: UsersService) {}

    ngOnInit() {
        this.uq.selectAll().subscribe(users => this.users2 = users);
        this.uq.selectLoading().subscribe(val => this.selectLoading = val);
        this.getUsers();
    }

    getUsers() {
        if (this.uq.isPristine) {
            this.us.getUsers();
        }
    }
}