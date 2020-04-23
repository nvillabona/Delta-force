import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprendedoresComponent } from './emprendedores.component';

describe('EmprendedoresComponent', () => {
  let component: EmprendedoresComponent;
  let fixture: ComponentFixture<EmprendedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmprendedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
