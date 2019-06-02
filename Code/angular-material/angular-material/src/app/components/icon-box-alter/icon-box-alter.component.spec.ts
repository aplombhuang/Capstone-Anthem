import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBoxAlterComponent } from './icon-box-alter.component';

describe('IconBoxAlterComponent', () => {
  let component: IconBoxAlterComponent;
  let fixture: ComponentFixture<IconBoxAlterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconBoxAlterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBoxAlterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
