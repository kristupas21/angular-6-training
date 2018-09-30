import { Component, OnInit } from "@angular/core";
import { ProjectsService, ProjectsQuery, Project } from "./state";

@Component({
    selector: 'akita-projs',
    template: `
        <div *ngFor="let proj of projects">
            <p>Name: {{proj.name}}, Desc: {{proj.desc}}, Created On: {{proj.createdOn | date}}</p>
        </div>
        <button (click)="addProj()">ADD PROJ</button>
    `
})
export class ProjectsComp implements OnInit {
    projects: Project[];

    constructor(private ps: ProjectsService, private pq: ProjectsQuery) {}

    ngOnInit() {
        this.pq.selectAll().subscribe(projs => this.projects = projs);
        this.getProjs();
    }

    getProjs() {
        this.ps.get();
    }

    addProj() {
        this.ps.add({ id: 'a129', name: 'NewProj', desc: 'New Desc', createdOn: new Date()})
    }
}