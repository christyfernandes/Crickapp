import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCalendarComponent } from './match-calendar.component';

describe('MatchCalendarComponent', () => {
  let component: MatchCalendarComponent;
  let fixture: ComponentFixture<MatchCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
