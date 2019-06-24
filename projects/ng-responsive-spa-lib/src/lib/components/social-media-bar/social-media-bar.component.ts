import { Component, OnInit } from '@angular/core';
import { NgResponsiveSpaLibService } from '../../ng-responsive-spa-lib.service';

@Component({
  selector: 'rsl-social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: ['./social-media-bar.component.scss']
})
export class SocialMediaBarComponent implements OnInit {

  constructor(public configService: NgResponsiveSpaLibService) { }

  ngOnInit() {
  }

}
