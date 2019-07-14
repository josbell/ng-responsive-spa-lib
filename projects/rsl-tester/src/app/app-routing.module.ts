import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TeamsComponent } from './teams/teams.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AuthGuardService } from './services/auth-guard.service';
import { MyAccountComponent } from './my-account/my-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { LessonsComponent } from './lessons/lessons.component';
import { SignInComponent } from 'ng-responsive-spa-lib';
import { RegisterComponent } from 'ng-responsive-spa-lib';
import { StudioServicesComponent } from './studio-services/studio-services.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'services', component: StudioServicesComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'myaccount', component: MyAccountComponent, canActivate: [AuthGuardService],
    children: [
      { path: '', canActivateChild: [AuthGuardService],
      children: [
        { path: 'profile/:operation', component: ProfileComponent},
        { path: 'profile', redirectTo: 'profile/view', pathMatch: 'full'},
        { path: 'subscription/:operation', component: SubscriptionComponent},
        { path: 'subscription', redirectTo: 'subscription/view', pathMatch: 'full'},
        { path: 'teams/:operation', component: TeamsComponent},
        { path: 'teams', redirectTo: 'teams/view', pathMatch: 'full'},
        { path: 'notifications/:operation', component: NotificationsComponent},
        { path: 'notifications', redirectTo: 'notifications/view', pathMatch: 'full'},
      ]}
    ]
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
