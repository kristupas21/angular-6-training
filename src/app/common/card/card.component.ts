import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CardProps } from '@app-interfaces/card-props';
import { CardAnimations } from './card.animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: CardAnimations
})
export class CardComponent {
  @Input() public visible: boolean;
  @Input('cardProps') public card: CardProps;
  @Output() public enableToggle = new EventEmitter();

  notifyDone(e): void {
    if (e.toState === 'invisible') {
      this.enableToggle.emit(false);
    }
  }
}
