import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-user',
  templateUrl: './icon-user.component.html',
  styleUrls: ['./icon-user.component.scss']
})
export class IconUserComponent implements OnInit {
  @Input() width = 20;
  @Input() height = 20;

  constructor() { }

  ngOnInit() {
  }

}
