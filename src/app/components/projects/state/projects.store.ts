import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Project } from './project.model';

export interface ProjectsState extends EntityState<Project> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'projects' })
export class ProjectsStore extends EntityStore<ProjectsState, Project> {

  constructor() {
    super();
  }

}

