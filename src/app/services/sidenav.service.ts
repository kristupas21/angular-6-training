import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  opened: boolean = false;
  constructor() { }

  toggleNav(): void {
    this.opened = !this.opened;
  }
}
