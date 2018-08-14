import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-nav-link]',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnInit {
  @Input() name: string;
  @Input() isSelected: boolean;
  @Input() isActive: boolean;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
