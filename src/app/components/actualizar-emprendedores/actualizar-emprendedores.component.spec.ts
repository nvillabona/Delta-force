import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEmprendedoresComponent } from './actualizar-emprendedores.component';

describe('ActualizarEmprendedoresComponent', () => {
  let component: ActualizarEmprendedoresComponent;
  let fixture: ComponentFixture<ActualizarEmprendedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarEmprendedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEmprendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
