import { Injectable } from '@angular/core';

@Injectable()
export class UserToken {
  public userDetails = {
    userName: null,
    password: null
  };
  public cleared = false;

  setUserDetails(userName, password) {
    this.userDetails.userName = userName;
    this.userDetails.password = password;
  }

  clearUserDetails() {
    if (!this.cleared) {
      this.cleared = true;
      this.userDetails.userName = null;
      this.userDetails.password = null;
    }
  }

  unClear() {
    this.cleared = false;
  }
}

