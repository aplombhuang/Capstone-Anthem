import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBannerPageComponent } from './layout-banner-page.component';

describe('LayoutBannerPageComponent', () => {
  let component: LayoutBannerPageComponent;
  let fixture: ComponentFixture<LayoutBannerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutBannerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutBannerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
