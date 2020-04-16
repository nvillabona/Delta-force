import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarConsultorComponent } from './actualizar-consultor.component';

describe('ActualizarConsultorComponent', () => {
  let component: ActualizarConsultorComponent;
  let fixture: ComponentFixture<ActualizarConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
