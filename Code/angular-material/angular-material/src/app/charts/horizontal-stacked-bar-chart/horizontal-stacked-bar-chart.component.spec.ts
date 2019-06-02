import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalStackedBarChartComponent } from './horizontal-stacked-bar-chart.component';

describe('HorizontalStackedBarChartComponent', () => {
  let component: HorizontalStackedBarChartComponent;
  let fixture: ComponentFixture<HorizontalStackedBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalStackedBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalStackedBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
