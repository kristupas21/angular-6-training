import { Component, OnInit, Input } from '@angular/core';
import { CardProps } from '@app-interfaces/card-props';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('isVisible', [
      state('visible', style({
        transform: 'translateX(0)'
      })),
      state('invisible', style({
        transform: 'translateX(calc(100% + 20px))'
      })),
      transition('invisible => visible', animate('300ms 100ms ease-in')),
      transition('visible => invisible', animate('300ms 100ms ease-out'))
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() public visible: boolean;
  @Input('cardProps') public card: CardProps;

  constructor() { }

  ngOnInit() {
  }

  notifyDone(): void {
    console.log('done!');
  }

}
