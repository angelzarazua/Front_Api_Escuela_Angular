import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesProfesorComponent } from './detalles-profesor.component';

describe('DetallesProfesorComponent', () => {
  let component: DetallesProfesorComponent;
  let fixture: ComponentFixture<DetallesProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
