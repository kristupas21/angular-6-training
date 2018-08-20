import { Component } from '@angular/core';
import { NavigationLink } from '@app-interfaces/navigation-link';
import { NavigationLinks } from '@app-data/navigation';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  public navigationLinks: Array<NavigationLink> = NavigationLinks;
  public selectedLink: string;
  public activeLink: string;

  constructor(private _location: Location, private _router: Router) {
    _router.events.subscribe(() => {
      const p = _location.path();
      const l = p.length - 1;
      const n = p.slice(7, l);

      if (this.activeLink !== n) {
        this.activeLink = n;
      }
    });
  }

  onMouseEnter(name: string): void {
    this.selectedLink = name;
  }

  onMouseLeave(name: string): void {
    if (this.selectedLink === name) {
      this.selectedLink = '';
    }
  }
}
