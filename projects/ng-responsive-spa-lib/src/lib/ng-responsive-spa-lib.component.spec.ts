import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgResponsiveSpaLibComponent } from './ng-responsive-spa-lib.component';

describe('NgResponsiveSpaLibComponent', () => {
  let component: NgResponsiveSpaLibComponent;
  let fixture: ComponentFixture<NgResponsiveSpaLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgResponsiveSpaLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgResponsiveSpaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
