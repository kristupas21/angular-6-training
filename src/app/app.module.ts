/* Core */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* External */
// Modules
import { StoreModule } from '@ngrx/store';
import { MatButtonModule, MatSelectModule, MatSidenavModule } from '@angular/material';
import { MatIconModule } from "@angular/material/icon";
/* Internal */
// Components
import { AppComponent } from './app.component';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { NavContainerComponent } from './components/nav-container/nav-container.component';
import { DisplayContainerComponent } from './components/display-container/display-container.component';
import { IconNotificationComponent } from './common/icons/icon-notification/icon-notification.component';
import { IconUserComponent } from './common/icons/icon-user/icon-user.component';
import { IconChevronRightComponent } from './common/icons/icon-chevron-right/icon-chevron-right.component';
// Reducers
import { sideNavReducer } from './reducers';
import { NavigationComponent } from './components/nav-container/navigation/navigation.component';
import { NavLinkComponent } from './components/nav-container/navigation/nav-link/nav-link.component';


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
    IconChevronRightComponent
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
    StoreModule.forRoot({ sideNavOpened: sideNavReducer })
  ],
  exports: [
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
