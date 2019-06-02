import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDefaultPageComponent } from './layout-default-page.component';

describe('LayoutDefaultPageComponent', () => {
  let component: LayoutDefaultPageComponent;
  let fixture: ComponentFixture<LayoutDefaultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutDefaultPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDefaultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
