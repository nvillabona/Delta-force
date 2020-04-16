import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEmprendimientosComponent } from './consultar-emprendimientos.component';

describe('ConsultarEmprendimientosComponent', () => {
  let component: ConsultarEmprendimientosComponent;
  let fixture: ComponentFixture<ConsultarEmprendimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarEmprendimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarEmprendimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
