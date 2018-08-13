import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-chevron-right',
  templateUrl: './icon-chevron-right.component.html'
})
export class IconChevronRightComponent implements OnInit {
  @Input() width: number = 20;
  @Input() height: number = 20;

  constructor() { }

  ngOnInit() {
  }

}
