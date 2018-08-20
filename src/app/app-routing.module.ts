import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { ProjectsComponent } from './components/display-container/projects/projects.component';
import { CaseBuilderComponent } from './components/display-container/case-builder/case-builder.component';
import { LabelExpComponent } from './components/display-container/label-exp/label-exp.component';
import { FilterSetupComponent } from './components/display-container/filter-setup/filter-setup.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { CanActivateTeam, Permissions } from '@app-services/can-activate.service';
import { UserToken } from '@app-services/user-token.service';


export const appRoutes: Routes = [
  { path: '', component: MainComponent, canActivate: [CanActivateTeam] },
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: ProjectsComponent, outlet: 'menu' },
  { path: 'case-builder', component: CaseBuilderComponent, outlet: 'menu' },
  { path: 'label-expectation', component: LabelExpComponent, outlet: 'menu' },
  { path: 'filter-setup', component: FilterSetupComponent, outlet: 'menu' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ],
  providers: [
    CanActivateTeam, Permissions, UserToken
  ]
})
export class AppRoutingModule {}
