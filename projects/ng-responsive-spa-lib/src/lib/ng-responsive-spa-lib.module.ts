import { NgModule } from '@angular/core';
import { NgResponsiveSpaLibComponent } from './ng-responsive-spa-lib.component';
import { BodyComponent } from './components/body/body.component';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { SideNavItemComponent } from './components/side-nav-item/side-nav-item.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialMediaBarComponent } from './components/social-media-bar/social-media-bar.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './components/users/register/register.component';
import { SignInComponent } from './components/users/sign-in/sign-in.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DynamicFieldComponent } from './components/dynamic-forms/dynamic-field/dynamic-field.component';
import { DynamicFormComponent } from './components/dynamic-forms/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    NgResponsiveSpaLibComponent,
    BodyComponent,
    HeaderComponent,
    SideNavItemComponent,
    ContentComponent,
    FooterComponent,
    SocialMediaBarComponent,
    MenuComponent,
    RegisterComponent,
    SignInComponent,
    DynamicFieldComponent,
    DynamicFormComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NgResponsiveSpaLibComponent,
    MaterialModule,
    DynamicFormComponent,
    SignInComponent,
    RegisterComponent
  ]
})
export class NgResponsiveSpaLibModule { }
