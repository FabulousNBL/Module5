import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceModalDeleteComponent } from './service-modal-delete.component';

describe('ServiceModalDeleteComponent', () => {
  let component: ServiceModalDeleteComponent;
  let fixture: ComponentFixture<ServiceModalDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceModalDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
