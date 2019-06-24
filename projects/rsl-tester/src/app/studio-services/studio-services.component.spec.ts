import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioServicesComponent } from './studio-services.component';

describe('StudioServicesComponent', () => {
  let component: StudioServicesComponent;
  let fixture: ComponentFixture<StudioServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudioServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
