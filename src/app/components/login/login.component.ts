import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@app-services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _localStorageService: LocalStorageService) { }

  ngOnInit() {
    this._localStorageService.deleteUser();
  }

}
