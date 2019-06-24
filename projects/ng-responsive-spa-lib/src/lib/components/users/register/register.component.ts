import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApi } from '../user-api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitting = false;
  serverError = '';
  constructor(public userApi: UserApi,
    private router: Router) { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    this.submitting = true;
    this.userApi.register(form.value)
      .subscribe(
        data => this.router.navigate(['/']),
        err => {
          this.submitting = false;
          console.log(err);
        }
      );
  }

}
