import { async, ComponentFixture, TestBed, ɵTestingCompilerFactory } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { UserApi } from '../user-api';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { MaterialModule } from '../../../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let userMockSvc: UserApi;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: UserApi, useValue: { isLoggedIn: new BehaviorSubject<boolean>(false) } },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SignInComponent);
        component = fixture.componentInstance;
      });
  }));

  beforeEach(() => {
    userMockSvc = TestBed.get(UserApi);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
