import { animate, state, style, transition, trigger } from '@angular/animations';

export const CardAnimations = [
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
];
