import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserToken } from '@app-services/user-token.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public login = {
    userName: '',
    password: ''
  };
  public invalidCredentials = false;
  public submitRecorded = false;

  constructor(
    private _router: Router,
    private _userTokenService: UserToken) {
  }

  ngOnInit() {

  }

  public loginUser(e): void {
    e.preventDefault();

    if (!this.submitRecorded) {
      this.submitRecorded = true;
    }

    if (!_.includes(e.target.classList, 'ng-invalid')) {
        this.invalidCredentials = true;
    }

    this._userTokenService.setUserDetails(this.login.userName, this.login.password);
    this._router.navigate(['main']);
  }

  public resetCredentials(): void {
    this.invalidCredentials = false;
  }

}
