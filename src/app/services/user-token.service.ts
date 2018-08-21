import { Injectable } from '@angular/core';

@Injectable()
export class UserToken {
  public userDetails = {
    userName: null,
    password: null
  };
  public cleared = false;

  setUserDetails(userName, password): void {
    this.userDetails.userName = userName;
    this.userDetails.password = password;
  }

  clearUserDetails(): void {
    if (!this.cleared) {
      this.cleared = true;
      this.userDetails.userName = null;
      this.userDetails.password = null;
    }
  }

  unClear(): void {
    this.cleared = false;
  }
}

