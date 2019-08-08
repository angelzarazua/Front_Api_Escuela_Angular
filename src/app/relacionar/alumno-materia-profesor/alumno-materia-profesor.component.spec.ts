import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoMateriaProfesorComponent } from './alumno-materia-profesor.component';

describe('AlumnoMateriaProfesorComponent', () => {
  let component: AlumnoMateriaProfesorComponent;
  let fixture: ComponentFixture<AlumnoMateriaProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoMateriaProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoMateriaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
