import { of, Observable, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { UserApi } from 'ng-responsive-spa-lib';
import { UserInfo } from 'ng-responsive-spa-lib';

@Injectable({
  providedIn: 'root',
})
export class UserService implements UserApi {
  _userCredentials: BehaviorSubject<any> = new BehaviorSubject(undefined);
  _isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  _hasSignInError: BehaviorSubject<boolean> = new BehaviorSubject(false);
  _hasRegisterError: BehaviorSubject<boolean> = new BehaviorSubject(false);
  _submitting: BehaviorSubject<boolean> = new BehaviorSubject(false);
  signInErrorMsg: Observable<string>;
  registerErrorMsg: Observable<string>;

  constructor() {}

  get isLoggedIn(): Observable<boolean> {
    return this._isLoggedIn.asObservable();
  }

  get hasSignInError(): Observable<boolean> {
    return this._hasSignInError.asObservable();
  }

  get hasRegisterError(): Observable<boolean> {
    return this._hasRegisterError.asObservable();
  }

  get submitting(): Observable<boolean> {
    return this._submitting.asObservable();
  }

  signInWithEmail(username: string, password: string, rememberMe: boolean) {
    this._submitting.next(true);
    of(true)
      .pipe(delay(2000))
      .subscribe(val => this.login());
  }

  signOut() {
    of(false).subscribe(val => this.logout());
  }

  changePassword(username: string, oldPassword: string, newPassword: string) {
    this._submitting.next(true);
    return of(true).pipe(delay(2000));
  }

  register(userInfo: UserInfo) {
    this._submitting.next(true);
    this._submitting.next(true);
    of(true)
      .pipe(delay(2000))
      .subscribe(val => this.login());
  }

  private login() {
    this._isLoggedIn.next(true);
    this._submitting.next(false);
  }

  private logout() {
    this._isLoggedIn.next(false);
    this._submitting.next(false);
  }
}
