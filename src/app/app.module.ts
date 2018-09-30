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
// Components
import { AppComponent } from './app.component';
import { IconNotificationComponent } from './common/icons/icon-notification/icon-notification.component';
import { IconUserComponent } from './common/icons/icon-user/icon-user.component';
import { IconChevronRightComponent } from './common/icons/icon-chevron-right/icon-chevron-right.component';
// Reducers
import { sideNavReducer, selectedNameReducer } from './reducers';

import { UserComponent } from './components/user/user.component';
import { CommonModule } from '@angular/common';
import { UsersStore } from './akita/user.store';


@NgModule({
  declarations: [
    AppComponent,
    IconNotificationComponent,
    IconUserComponent,
    IconChevronRightComponent,
    UserComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
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
