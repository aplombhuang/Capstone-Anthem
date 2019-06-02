import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLinePageComponent } from './chart-line-page.component';

describe('ChartLinePageComponent', () => {
  let component: ChartLinePageComponent;
  let fixture: ComponentFixture<ChartLinePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLinePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
