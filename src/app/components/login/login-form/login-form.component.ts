import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserToken } from '@app-services/user-token.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public userName: string;
  public password: string;

  constructor(
    private _router: Router,
    private _userTokenService: UserToken) {
  }

  loginUser(e) {
    e.preventDefault();

    this.userName = e.target['login-username'].value;
    this.password = e.target['login-password'].value;

    this._userTokenService.setUserDetails(this.userName, this.password);
    this._router.navigate(['main']);
  }

}
