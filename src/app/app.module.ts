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
// Services
import { MessageService } from '@app-services/message.service';
import { SideNavService } from '@app-services/sidenav.service';
import { NotificationService } from '@app-services/notification.service';
import { UserToken as UserTokenService } from '@app-services/user-token.service';
import { TestService } from '@app-services/test-service.service';
// Pipes
import { ReversedPipe } from './pipes/test-pipe';
import { CardComponent } from './common/card/card.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { LoginTitleComponent } from './components/login/login-title/login-title.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { SmartInputComponent } from './components/login/login-form/smart-input/smart-input.component';


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
    ReversedPipe,
    CardComponent,
    LoginComponent,
    MainComponent,
    LoginTitleComponent,
    LoginFormComponent,
    SmartInputComponent,
  ],
  imports: [
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
  providers: [MessageService, SideNavService, NotificationService, UserTokenService, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
