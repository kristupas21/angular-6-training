import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/display-container/projects/projects.component';
import { CaseBuilderComponent } from './components/display-container/case-builder/case-builder.component';
import { LabelExpComponent } from './components/display-container/label-exp/label-exp.component';
import { FilterSetupComponent } from './components/display-container/filter-setup/filter-setup.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'case-builder', component: CaseBuilderComponent },
  { path: 'label-expectation', component: LabelExpComponent },
  { path: 'filter-setup', component: FilterSetupComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
