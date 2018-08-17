import { Component, OnInit, Input } from '@angular/core';
import { CardProps } from '@app-interfaces/card-props';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('isVisible', [
      state('void', style({
        transform: 'translateX(-100%)',
      })),
      state('visible', style({
        transform: 'translateX(0)'
      })),
      state('invisible', style({
        transform: 'translateX(calc(100% + 20px))'
      })),
      transition('void => *', animate('1000ms cubic-bezier(0.5,2,0.5,0.5)')),
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

  notifyDone(e): void {
    console.log(`Animation from **${e.fromState}** to **${e.toState}** is **${e.phaseName}**.`);
  }

}
