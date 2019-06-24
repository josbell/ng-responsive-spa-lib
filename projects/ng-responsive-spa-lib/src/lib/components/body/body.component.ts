import { Component, OnInit } from '@angular/core';
import { NgResponsiveSpaLibService } from '../../ng-responsive-spa-lib.service';

@Component({
  selector: 'rsl-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  constructor(public configService: NgResponsiveSpaLibService) { }

}
