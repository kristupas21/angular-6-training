import { Component, Input, OnChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: '[app-nav-link]',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
  animations: [
    trigger('hideShowAnimator', [
      state('true', style({ opacity: 1, visibility: 'visible' })),
      state('false', style({ opacity: 0, visibility: 'hidden' })),
      transition('0 => 1', animate('.3s')),
      transition('1 => 0', animate('.3s'))
    ])
  ]
})
export class NavLinkComponent implements OnChanges {
  @Input() public name: string;
  @Input() public isSelected: boolean;
  @Input() public isActive: boolean;
  @Input() public icon: string;
  @Input() public isSmall: boolean;
  public hideShowAnimator = true;

  ngOnChanges(change): void {
    if (change.isSmall) {
      this.hideShowAnimator = !change.isSmall.currentValue;
    }
  }
}
