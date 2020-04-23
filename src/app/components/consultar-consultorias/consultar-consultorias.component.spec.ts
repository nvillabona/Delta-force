import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarConsultoriasComponent } from './consultar-consultorias.component';

describe('ConsultarConsultoriasComponent', () => {
  let component: ConsultarConsultoriasComponent;
  let fixture: ComponentFixture<ConsultarConsultoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarConsultoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarConsultoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
