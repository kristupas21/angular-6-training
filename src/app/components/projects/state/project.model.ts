import { ID } from '@datorama/akita';

export interface Project {
  id: ID;
  name: string;
  desc: string;
  createdOn: string | Date;
}

export function createProject({id, name, desc, createdOn}: Partial<Project>) {
  return {
    id,
    name,
    desc,
    createdOn
  } as Project;
}
