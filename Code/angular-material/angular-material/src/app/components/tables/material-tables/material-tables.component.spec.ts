import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTablesComponent } from './material-tables.component';

describe('MaterialTablesComponent', () => {
  let component: MaterialTablesComponent;
  let fixture: ComponentFixture<MaterialTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
