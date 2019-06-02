import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePickerPageComponent } from './time-picker-page.component';

describe('TimePickerPageComponent', () => {
  let component: TimePickerPageComponent;
  let fixture: ComponentFixture<TimePickerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePickerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePickerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
