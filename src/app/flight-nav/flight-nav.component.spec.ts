import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightNavComponent } from './flight-nav.component';

describe('FlightNavComponent', () => {
  let component: FlightNavComponent;
  let fixture: ComponentFixture<FlightNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
