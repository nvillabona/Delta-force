import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesConsultoriasComponent } from './reportes-consultorias.component';

describe('ReportesConsultoriasComponent', () => {
  let component: ReportesConsultoriasComponent;
  let fixture: ComponentFixture<ReportesConsultoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesConsultoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesConsultoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
