import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassPageComponent } from './forgot-pass-page.component';

describe('ForgotPassPageComponent', () => {
  let component: ForgotPassPageComponent;
  let fixture: ComponentFixture<ForgotPassPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPassPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
