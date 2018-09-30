/* Core */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* External */
// Modules
import { StoreModule } from '@ngrx/store';
import { MatButtonModule, MatSelectModule, MatSidenavModule, MatTableModule, MatSortModule, MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
// Components

/* Internal */
// Modules
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { NavContainerComponent } from './components/nav-container/nav-container.component';
import { DisplayContainerComponent } from './components/display-container/display-container.component';
import { IconNotificationComponent } from './common/icons/icon-notification/icon-notification.component';
import { IconUserComponent } from './common/icons/icon-user/icon-user.component';
import { IconChevronRightComponent } from './common/icons/icon-chevron-right/icon-chevron-right.component';
import { NavigationComponent } from './components/nav-container/navigation/navigation.component';
import { NavLinkComponent } from './components/nav-container/navigation/nav-link/nav-link.component';
import { CaseBuilderComponent } from './components/display-container/case-builder/case-builder.component';
import { ProjectsComponent } from './components/display-container/projects/projects.component';
import { LabelExpComponent } from './components/display-container/label-exp/label-exp.component';
import { FilterSetupComponent } from './components/display-container/filter-setup/filter-setup.component';
import { ProjectListComponent } from './components/display-container/projects/project-list/project-list.component';
// Reducers
import { sideNavReducer, selectedNameReducer } from './reducers';

import { UserComponent } from './components/user/user.component';
import { CommonModule } from '@angular/common';
import { UsersStore } from './akita/user.store';


@NgModule({
  declarations: [
    AppComponent,
    DashboardContainerComponent,
    NavContainerComponent,
    DisplayContainerComponent,
    IconNotificationComponent,
    IconUserComponent,
    NavigationComponent,
    NavLinkComponent,
    IconChevronRightComponent,
    CaseBuilderComponent,
    ProjectsComponent,
    LabelExpComponent,
    FilterSetupComponent,
    ProjectListComponent,
    UserComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    StoreModule.forRoot({
      sideNavOpened: sideNavReducer,
      selectedUser: selectedNameReducer
    })
  ],
  exports: [
    MatButtonModule
  ],
  providers: [UsersStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
