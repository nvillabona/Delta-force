import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEmprenddedoresComponent } from './consultar-emprenddedores.component';

describe('ConsultarEmprenddedoresComponent', () => {
  let component: ConsultarEmprenddedoresComponent;
  let fixture: ComponentFixture<ConsultarEmprenddedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarEmprenddedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarEmprenddedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
