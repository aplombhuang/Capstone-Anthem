import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOtherPageComponent } from './chart-other-page.component';

describe('ChartOtherPageComponent', () => {
  let component: ChartOtherPageComponent;
  let fixture: ComponentFixture<ChartOtherPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartOtherPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartOtherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
