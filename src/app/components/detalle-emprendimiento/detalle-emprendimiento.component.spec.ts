import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEmprendimientoComponent } from './detalle-emprendimiento.component';

describe('DetalleEmprendimientoComponent', () => {
  let component: DetalleEmprendimientoComponent;
  let fixture: ComponentFixture<DetalleEmprendimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleEmprendimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEmprendimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
