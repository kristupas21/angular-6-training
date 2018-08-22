import { Component, Input, OnInit } from '@angular/core';
import { NavigationLinks } from '@app-data/navigation';
import { Router, ActivatedRoute } from '@angular/router';
import { UserToken } from '@app-services/user-token.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  public navigationLinks = NavigationLinks;
  public selectedLink: string;
  public activeLink: string;
  @Input() small: boolean;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _userTokenService: UserToken,
    private _location: Location
  ) {
    _router.events.subscribe(() => {
      let path = '';

      if (this._activatedRoute.snapshot.firstChild) {
        path = this._activatedRoute.snapshot.firstChild.routeConfig.path;
      }

      if (this._location.path() === '/login' && !this._userTokenService.cleared) {
        this._userTokenService.clearUserDetails();
      }

      if (this.activeLink !== path) {
        this.activeLink = path;
      }
    });
  }

  ngOnInit() {
    this._userTokenService.unClear();
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
