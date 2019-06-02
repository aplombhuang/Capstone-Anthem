import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTablePageComponent } from './pricing-table-page.component';

describe('PricingTablePageComponent', () => {
  let component: PricingTablePageComponent;
  let fixture: ComponentFixture<PricingTablePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingTablePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
