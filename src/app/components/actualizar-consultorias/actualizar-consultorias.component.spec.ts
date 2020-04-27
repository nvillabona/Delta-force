import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarConsultoriasComponent } from './actualizar-consultorias.component';

describe('ActualizarConsultoriasComponent', () => {
  let component: ActualizarConsultoriasComponent;
  let fixture: ComponentFixture<ActualizarConsultoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarConsultoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarConsultoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
