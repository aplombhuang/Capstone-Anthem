import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBarPageComponent } from './chart-bar-page.component';

describe('ChartBarPageComponent', () => {
  let component: ChartBarPageComponent;
  let fixture: ComponentFixture<ChartBarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartBarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
