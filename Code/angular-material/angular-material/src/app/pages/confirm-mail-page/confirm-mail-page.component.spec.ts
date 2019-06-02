import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmMailPageComponent } from './confirm-mail-page.component';

describe('ConfirmMailPageComponent', () => {
  let component: ConfirmMailPageComponent;
  let fixture: ComponentFixture<ConfirmMailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmMailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmMailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
