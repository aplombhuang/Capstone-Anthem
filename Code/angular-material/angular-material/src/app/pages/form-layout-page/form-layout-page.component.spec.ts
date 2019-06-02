import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLayoutPageComponent } from './form-layout-page.component';

describe('FormLayoutPageComponent', () => {
  let component: FormLayoutPageComponent;
  let fixture: ComponentFixture<FormLayoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLayoutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
