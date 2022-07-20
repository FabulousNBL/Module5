import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCustomerCreateComponent } from './modal-customer-create.component';

describe('ModalCustomerCreateComponent', () => {
  let component: ModalCustomerCreateComponent;
  let fixture: ComponentFixture<ModalCustomerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCustomerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCustomerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
