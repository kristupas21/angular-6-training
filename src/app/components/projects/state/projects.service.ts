import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { ProjectsStore } from './projects.store';
import { HttpClient } from '@angular/common/http';
import { mockProjects } from './projects.data';
import { Project } from './project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {

  constructor(private projectsStore: ProjectsStore,
              private http: HttpClient) {
  }

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.projectsStore.set(entities);
    // });
    this.projectsStore.set(mockProjects);
  }

  add(project: Project) {
    // this.http.post().subscribe((entity: ServerResponse) => {
      // this.projectsStore.add(entity);
    // });
    this.projectsStore.add(project);

  }

}
