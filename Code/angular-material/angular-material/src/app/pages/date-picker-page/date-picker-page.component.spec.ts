import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerPageComponent } from './date-picker-page.component';

describe('DatePickerPageComponent', () => {
  let component: DatePickerPageComponent;
  let fixture: ComponentFixture<DatePickerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
