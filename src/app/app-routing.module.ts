import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from "./components/display-container/projects/projects.component";
import { CaseBuilderComponent } from "./components/display-container/case-builder/case-builder.component";

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'case-builder', component: CaseBuilderComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
