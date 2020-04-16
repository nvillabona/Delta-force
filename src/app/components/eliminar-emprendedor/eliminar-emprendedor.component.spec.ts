import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEmprendedorComponent } from './eliminar-emprendedor.component';

describe('EliminarEmprendedorComponent', () => {
  let component: EliminarEmprendedorComponent;
  let fixture: ComponentFixture<EliminarEmprendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarEmprendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEmprendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
