import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTailwindDatatableComponent } from './ng-tailwind-datatable.component';

describe('NgTailwindDatatableComponent', () => {
  let component: NgTailwindDatatableComponent;
  let fixture: ComponentFixture<NgTailwindDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTailwindDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTailwindDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
