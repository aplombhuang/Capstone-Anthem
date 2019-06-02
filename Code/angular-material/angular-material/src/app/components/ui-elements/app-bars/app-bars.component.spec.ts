import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarsComponent } from './app-bars.component';

describe('AppBarsComponent', () => {
  let component: AppBarsComponent;
  let fixture: ComponentFixture<AppBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
