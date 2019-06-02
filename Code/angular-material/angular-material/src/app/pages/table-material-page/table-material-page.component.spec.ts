import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMaterialPageComponent } from './table-material-page.component';

describe('TableMaterialPageComponent', () => {
  let component: TableMaterialPageComponent;
  let fixture: ComponentFixture<TableMaterialPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMaterialPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMaterialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
