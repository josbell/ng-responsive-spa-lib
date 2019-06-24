import { Component, OnInit } from '@angular/core';
import { NgResponsiveSpaLibService } from '../../ng-responsive-spa-lib.service';
import { Router } from '@angular/router';
import { UserApi } from '../users/user-api';

@Component({
  selector: 'rsl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public configService: NgResponsiveSpaLibService,
    public userApi: UserApi,
    public router: Router
  ) { }

  ngOnInit() {
  }

  signOut() {
    this.userApi.signOut()
      .subscribe(
        data => this.router.navigate(['/']),
        err => console.log(err)
      );
  }

}
