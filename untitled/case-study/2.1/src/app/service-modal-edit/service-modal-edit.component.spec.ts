import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceModalEditComponent } from './service-modal-edit.component';

describe('ServiceModalEditComponent', () => {
  let component: ServiceModalEditComponent;
  let fixture: ComponentFixture<ServiceModalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceModalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
