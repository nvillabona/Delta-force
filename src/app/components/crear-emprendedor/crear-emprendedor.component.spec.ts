import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEmprendedorComponent } from './crear-emprendedor.component';

describe('CrearEmprendedorComponent', () => {
  let component: CrearEmprendedorComponent;
  let fixture: ComponentFixture<CrearEmprendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEmprendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEmprendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
