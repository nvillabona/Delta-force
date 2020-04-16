import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultoresComponent } from './consultores.component';

describe('ConsultoresComponent', () => {
  let component: ConsultoresComponent;
  let fixture: ComponentFixture<ConsultoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
