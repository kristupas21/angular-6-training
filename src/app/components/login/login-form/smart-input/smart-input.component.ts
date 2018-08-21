import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-smart-input]',
  templateUrl: './smart-input.component.html'
})
export class SmartInputComponent implements OnInit {
  @Input() name: string;
  @Input() model: any;
  @Input() ref: string;
  @Input() placeholder: string;
  @Input() label: string;
  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  handleFocus() {
    this.onFocus.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
