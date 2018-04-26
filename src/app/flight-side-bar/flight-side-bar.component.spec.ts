import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSideBarComponent } from './flight-side-bar.component';

describe('FlightSideBarComponent', () => {
  let component: FlightSideBarComponent;
  let fixture: ComponentFixture<FlightSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
