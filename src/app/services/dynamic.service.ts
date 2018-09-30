import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DynamicService extends BehaviorSubject<any> {
    private val: any;

    constructor(x) {
        super(x);
        this.val = x;
    }

    getVal(): any {
        return this.val;
    }

    getThis(): any {
        return this;
    }
}