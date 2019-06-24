import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  constructor() { }

  links = [
    { label: 'Profile', path: '/myaccount/profile' },
    { label: 'Manage Subscription', path: '/myaccount/subscription' },
    { label: 'Manage Teams', path: '/myaccount/teams' },
    { label: 'Notifications', path: '/myaccount/notifications' }
  ];
  activeLink = this.links[0];

  ngOnInit() {}

}
