import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarConsultoriaComponent } from './eliminar-consultoria.component';

describe('EliminarConsultoriaComponent', () => {
  let component: EliminarConsultoriaComponent;
  let fixture: ComponentFixture<EliminarConsultoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarConsultoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarConsultoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
