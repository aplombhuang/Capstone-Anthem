import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListPageComponent } from './grid-list-page.component';

describe('GridListPageComponent', () => {
  let component: GridListPageComponent;
  let fixture: ComponentFixture<GridListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
