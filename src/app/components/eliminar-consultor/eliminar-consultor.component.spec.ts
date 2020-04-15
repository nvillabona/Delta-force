import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarConsultorComponent } from './eliminar-consultor.component';

describe('EliminarConsultorComponent', () => {
  let component: EliminarConsultorComponent;
  let fixture: ComponentFixture<EliminarConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
