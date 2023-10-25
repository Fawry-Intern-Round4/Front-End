import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAllStoresComponent } from './manage-all-stores.component';

describe('ManageAllStoresComponent', () => {
  let component: ManageAllStoresComponent;
  let fixture: ComponentFixture<ManageAllStoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAllStoresComponent]
    });
    fixture = TestBed.createComponent(ManageAllStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
