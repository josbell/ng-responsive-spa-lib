import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApi } from '../user-api';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { usernameVal, passwordVal } from '../../../model';

@Component({
  selector: 'rsl-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();
  public signInForm: FormGroup;

  constructor(public userApi: UserApi, private router: Router, fb: FormBuilder) {
    this.signInForm = fb.group({
      email: ['', usernameVal],
      password: ['', passwordVal],
      rememberMe: [''],
    });
  }

  get emailControl(): FormControl {
    return this.signInForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.signInForm.get('password') as FormControl;
  }

  ngOnInit() {
    this.userApi.isLoggedIn
      .pipe(
        filter((loggedIn: boolean) => !!loggedIn),
        takeUntil(this.unsubscribe),
      )
      .subscribe(loggedIn => this.router.navigate(['/']));
  }

  onSubmit() {
    const { email, password, rememberMe } = this.signInForm.value;
    this.userApi.signInWithEmail(email, password, rememberMe);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }
}
