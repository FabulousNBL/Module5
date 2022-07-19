import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceModalCreateComponent } from './service-modal-create.component';

describe('ServiceModalCreateComponent', () => {
  let component: ServiceModalCreateComponent;
  let fixture: ComponentFixture<ServiceModalCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceModalCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceModalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
