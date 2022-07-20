import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteCustomerComponent } from './modal-delete-customer.component';

describe('ModalDeleteCustomerComponent', () => {
  let component: ModalDeleteCustomerComponent;
  let fixture: ComponentFixture<ModalDeleteCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
