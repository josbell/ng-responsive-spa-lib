import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SignInComponent } from './sign-in.component';
import { UserApi } from '../user-api';
import { BehaviorSubject, of } from 'rxjs';
import { Router } from '@angular/router';
import { MaterialModule } from '../../../material/material.module';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';

fdescribe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let userMockSvc: UserApi;
  let cmpDE: DebugElement;
  let cmpEl: HTMLElement;
  let form: FormGroup;
  const loggedInMock: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        {
          provide: UserApi,
          useValue: { isLoggedIn: loggedInMock, signInWithEmail: () => {} },
        },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SignInComponent);
        component = fixture.componentInstance;
        cmpDE = fixture.debugElement.nativeElement;
        cmpEl = cmpDE.nativeElement;
        userMockSvc = TestBed.get(UserApi);
        fixture.detectChanges();
        form = component.signInForm;
        router = TestBed.get(Router);
      });
  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect when loggedIn', () => {
    const navigateSpy = spyOn(router, 'navigate');
    loggedInMock.next(true);
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });

  describe('signInWithEmail', () => {
    const mockCredentials = {
      email: 'john@gmail.com',
      password: '123456',
      rememberMe: false,
    };
    it('should send user credentials to user api when form valid', () => {
      const { email, password, rememberMe } = mockCredentials;
      form.setValue(mockCredentials);
      spyOn(userMockSvc, 'signInWithEmail');
      component.onSubmit();

      expect(userMockSvc.signInWithEmail).toHaveBeenCalledWith(email, password, rememberMe);
    });
  });

  describe('Form Controls', () => {
    describe('Email Input Field', () => {
      it('should be invalid if field empty', () => {
        const emailControl: FormControl = form.get('email') as FormControl;
        emailControl.setValue('');
        fixture.detectChanges();

        expect(form.valid).toBe(false);
        expect(emailControl.valid).toBe(false);
        expect(emailControl.hasError('required')).toBe(true);
      });
      it('should be invalid if not email format', () => {
        const emailControl: FormControl = form.get('email') as FormControl;
        emailControl.setValue('abcd');
        fixture.detectChanges();

        expect(form.valid).toBe(false);
        expect(emailControl.valid).toBe(false);
        expect(emailControl.hasError('email')).toBe(true);
      });
    });
    describe('Password Input Field', () => {
      it('should be invalid if field empty', () => {
        const passwordControl: FormControl = form.get('password') as FormControl;
        passwordControl.setValue('');
        fixture.detectChanges();

        expect(form.valid).toBe(false);
        expect(passwordControl.valid).toBe(false);
        expect(passwordControl.hasError('required')).toBe(true);
      });
      it('should be invalid if less than 6 characters', () => {
        const passwordControl: FormControl = form.get('password') as FormControl;
        passwordControl.setValue('abcd');
        fixture.detectChanges();

        expect(form.valid).toBe(false);
        expect(passwordControl.valid).toBe(false);
        expect(passwordControl.hasError('minlength')).toBe(true);
      });
    });
  });
});
