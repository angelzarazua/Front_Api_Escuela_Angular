import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresAlumnoComponent } from './profesores-alumno.component';

describe('ProfesoresAlumnoComponent', () => {
  let component: ProfesoresAlumnoComponent;
  let fixture: ComponentFixture<ProfesoresAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesoresAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoresAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
