import { Component, OnInit } from '@angular/core';
import { NavigationLink } from "../../../interfaces/navigation-link";
import { NavigationLinks } from "../../../data/navigation";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  navigationLinks: Array<NavigationLink> = NavigationLinks;
  selectedLink: string;

  constructor() { }

  ngOnInit() {
  }

  onMouseEnter(name: string): void {
    this.selectedLink = name;
  }

  onMouseLeave(name: string): void {
    if (this.selectedLink === name) {
      this.selectedLink = '';
    }
  }

}
