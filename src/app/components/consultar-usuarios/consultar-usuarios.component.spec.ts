import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarUsuariosComponent } from './consultar-usuarios.component';

describe('ConsultarUsuariosComponent', () => {
  let component: ConsultarUsuariosComponent;
  let fixture: ComponentFixture<ConsultarUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
