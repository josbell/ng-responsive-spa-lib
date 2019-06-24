import { Component, OnInit } from '@angular/core';
import { NgResponsiveSpaLibService } from '../../ng-responsive-spa-lib.service';

@Component({
  selector: 'rsl-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public configService: NgResponsiveSpaLibService) { }

  ngOnInit() {
  }

}
