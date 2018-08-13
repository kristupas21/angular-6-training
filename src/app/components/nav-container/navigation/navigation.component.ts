import { Component, OnInit } from '@angular/core';
import { NavigationLinks } from "../../../data/navigation";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  navigationLinks: Array<string> = NavigationLinks;
  selectedLink: string;

  constructor() { }

  ngOnInit() {
  }

  onMouseEnter(link: string): void {
    this.selectedLink = link;
  }

  onMouseLeave(link: string): void {
    if (this.selectedLink === link) {
      this.selectedLink = '';
    }
  }

}
