import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearConsultoriaComponent } from './crear-consultoria.component';

describe('CrearConsultoriaComponent', () => {
  let component: CrearConsultoriaComponent;
  let fixture: ComponentFixture<CrearConsultoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearConsultoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearConsultoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
