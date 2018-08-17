import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-nav-link]',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent {
  @Input() public name: string;
  @Input() public isSelected: boolean;
  @Input() public isActive: boolean;
  @Input() public icon: string;
}
