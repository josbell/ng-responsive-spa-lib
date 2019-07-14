import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApi } from '../user-api';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  submitting = false;
  serverError = '';

  constructor(private userApi: UserApi,
    private router: Router) { }

  ngOnInit() {
    if (this.userApi.isLoggedIn) {
      this.router.navigate(['/']);
    }
  }

  onSubmit(form: NgForm) {
    this.submitting = true;
    this.userApi.signIn(form.value.username, form.value.password, form.value.rememberme)
      .subscribe(data => {
        this.router.navigate(['/']);
      },
        (err) => {
          this.submitting = false;
          this.serverError = err;
        });
  }

}
