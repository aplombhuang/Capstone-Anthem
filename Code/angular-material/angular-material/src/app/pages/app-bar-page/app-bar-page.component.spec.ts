import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarPageComponent } from './app-bar-page.component';

describe('AppBarPageComponent', () => {
  let component: AppBarPageComponent;
  let fixture: ComponentFixture<AppBarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
