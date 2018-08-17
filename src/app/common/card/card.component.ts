import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CardProps } from '@app-interfaces/card-props';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('isVisible', [
      state('void', style({
        transform: 'translateX(0)',
      })),
      state('visible', style({
        transform: 'translateX(0)'
      })),
      state('invisible', style({
        transform: 'translateX(calc(100% + 20px))'
      })),
      transition('void => *', animate('0ms cubic-bezier(0.5,2,0.5,0.5)')),
      transition('invisible => visible', animate('300ms 100ms ease-in')),
      transition('visible => invisible', animate('300ms 100ms ease-out'))
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() public visible: boolean;
  @Input('cardProps') public card: CardProps;
  @Output() public enableToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  notifyDone(e): void {
    console.log(`Animation from **${e.fromState}** to **${e.toState}** is **${e.phaseName}**.`);

    if (e.toState === 'invisible') {
      this.enableToggle.emit(false);
    }
  }

}
