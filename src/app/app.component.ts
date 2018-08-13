import { Component } from '@angular/core';
import { MessageService } from "./message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Tour of heroes';

  constructor(public messageService: MessageService) {

  }
}
