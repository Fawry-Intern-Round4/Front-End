import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAllProductsComponent } from './manage-all-products.component';

describe('ManageAllProductsComponent', () => {
  let component: ManageAllProductsComponent;
  let fixture: ComponentFixture<ManageAllProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAllProductsComponent]
    });
    fixture = TestBed.createComponent(ManageAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
