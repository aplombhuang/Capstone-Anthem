import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBootstrapPageComponent } from './table-bootstrap-page.component';

describe('TableBootstrapPageComponent', () => {
  let component: TableBootstrapPageComponent;
  let fixture: ComponentFixture<TableBootstrapPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBootstrapPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBootstrapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
