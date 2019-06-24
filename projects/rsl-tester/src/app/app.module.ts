import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgResponsiveSpaLibModule, UserApi } from 'ng-responsive-spa-lib';
import { UserService } from './services/user.service';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TeamsComponent } from './teams/teams.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LessonsComponent } from './lessons/lessons.component';
import { StudioServicesComponent } from './studio-services/studio-services.component';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PageNotFoundComponent,
    NotificationsComponent,
    TeamsComponent,
    SubscriptionComponent,
    MyAccountComponent,
    DashboardComponent,
    ScheduleComponent,
    LessonsComponent,
    StudioServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgResponsiveSpaLibModule
  ],
  providers: [{ provide: UserApi, useExisting: UserService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
