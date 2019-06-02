import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleUiPageComponent } from './simple-ui-page.component';

describe('SimpleUiPageComponent', () => {
  let component: SimpleUiPageComponent;
  let fixture: ComponentFixture<SimpleUiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleUiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleUiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
