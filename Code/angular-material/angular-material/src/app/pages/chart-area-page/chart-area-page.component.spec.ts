import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAreaPageComponent } from './chart-area-page.component';

describe('ChartAreaPageComponent', () => {
  let component: ChartAreaPageComponent;
  let fixture: ComponentFixture<ChartAreaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartAreaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartAreaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
