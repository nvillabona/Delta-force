import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEmprendimientoComponent } from './actualizar-emprendimiento.component';

describe('ActualizarEmprendimientoComponent', () => {
  let component: ActualizarEmprendimientoComponent;
  let fixture: ComponentFixture<ActualizarEmprendimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarEmprendimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEmprendimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
