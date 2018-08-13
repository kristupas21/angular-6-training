import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnChanges, OnInit {
  @Input() message: string;

  constructor(public messageService: MessageService) {

  }

  ngOnInit() {

  }

  ngOnChanges(changes): void {
    console.log(changes);
  }
}
