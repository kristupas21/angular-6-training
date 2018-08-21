import { Injectable } from '@angular/core';
import { UserDetails } from '@app-interfaces/user-details';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  checkUser() {
    return !!localStorage.getItem('user');
  }

  storeUser(user: UserDetails): void {
    localStorage.setItem('user', JSON.stringify({...user}) );
  }

  deleteUser(): void {
    localStorage.removeItem('user');
  }
}
