import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearConsultorComponent } from './crear-consultor.component';

describe('CrearConsultorComponent', () => {
  let component: CrearConsultorComponent;
  let fixture: ComponentFixture<CrearConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
