import { NgForm } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserApi } from '../user-api';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'rsl-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();

  constructor(public userApi: UserApi, private router: Router) {}

  ngOnInit() {
    this.userApi.isLoggedIn
      .pipe(
        filter((loggedIn: boolean) => !!loggedIn),
        takeUntil(this.unsubscribe),
      )
      .subscribe(loggedIn => this.router.navigate(['/']));
  }

  onSubmit(form: NgForm) {
    this.userApi.register(form.value);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }
}
