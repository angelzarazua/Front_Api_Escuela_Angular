import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarAlumnoComponent } from './agregar/agregar-alumno/agregar-alumno.component';
import { AgregarProfesorComponent } from './agregar/agregar-profesor/agregar-profesor.component';
import { AgregarMateriaComponent } from './agregar/agregar-materia/agregar-materia.component';
import { HomeComponent } from './Home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnoComponent } from './visualizar/alumno/alumno.component';
import { ProfesorComponent } from './visualizar/profesor/profesor.component';
import { MateriasComponent } from './visualizar/materias/materias.component';
import { DetallesAlumnoComponent } from './detalles/detalles-alumno/detalles-alumno.component';
import { DetallesMateriaComponent } from './detalles/detalles-materia/detalles-materia.component';
import { DetallesProfesorComponent } from './detalles/detalles-profesor/detalles-profesor.component';
import { MateriasAlumnoComponent } from './detalles/materias-alumno/materias-alumno.component';
import { ProfesoresAlumnoComponent } from './detalles/profesores-alumno/profesores-alumno.component';
import { AlumnoMateriaComponent } from './relacionar/alumno-materia/alumno-materia.component';
import { ProfesorMateriaComponent } from './relacionar/profesor-materia/profesor-materia.component';
import { MateriasProfesorComponent } from './detalles/materias-profesor/materias-profesor.component';
import { AlumnosProfesorComponent } from './detalles/alumnos-profesor/alumnos-profesor.component';
import { AlumnoMateriaProfesorComponent } from './relacionar/alumno-materia-profesor/alumno-materia-profesor.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarAlumnoComponent,
    AgregarProfesorComponent,
    AgregarMateriaComponent,
    HomeComponent,
    AlumnoComponent,
    ProfesorComponent,
    MateriasComponent,
    DetallesAlumnoComponent,
    DetallesMateriaComponent,
    DetallesProfesorComponent,
    MateriasAlumnoComponent,
    ProfesoresAlumnoComponent,
    AlumnoMateriaComponent,
    ProfesorMateriaComponent,
    MateriasProfesorComponent,
    AlumnosProfesorComponent,
    AlumnoMateriaProfesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
