import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  public title = 'projects';
  public heading = 'active projects';
  public button = {
    newTemplate: 'new template',
    startTemplate: 'start template'
  };

  constructor() {}

  ngOnInit() {

  }
}
