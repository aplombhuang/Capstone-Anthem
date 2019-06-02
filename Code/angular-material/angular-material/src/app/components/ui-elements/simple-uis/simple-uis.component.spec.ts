import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleUisComponent } from './simple-uis.component';

describe('SimpleUisComponent', () => {
  let component: SimpleUisComponent;
  let fixture: ComponentFixture<SimpleUisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleUisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleUisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
