import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  message: string = 'Init';

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  changeMessage() {
    this.message === 'Init'
      ? this.message = 'Secondary'
      : this.message = 'Init';
  }
}
