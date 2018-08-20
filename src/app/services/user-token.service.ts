import { Injectable } from '@angular/core';

@Injectable()
export class UserToken {
  public userDetails = {
    userName: '',
    password: ''
  };

  setUserDetails(userName, password) {
    this.userDetails.userName = userName;
    this.userDetails.password = password;
  }
}

