import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarAlumnoComponent } from './agregar/agregar-alumno/agregar-alumno.component';
import { HomeComponent } from './Home/home/home.component';
import { AgregarProfesorComponent } from './agregar/agregar-profesor/agregar-profesor.component';
import { AgregarMateriaComponent } from './agregar/agregar-materia/agregar-materia.component';
import { AlumnoComponent } from './visualizar/alumno/alumno.component';
import { ProfesorComponent } from './visualizar/profesor/profesor.component';
import { MateriasComponent } from './visualizar/materias/materias.component';
import { DetallesAlumnoComponent } from './detalles/detalles-alumno/detalles-alumno.component';
import { DetallesProfesorComponent } from './detalles/detalles-profesor/detalles-profesor.component';
import { DetallesMateriaComponent } from './detalles/detalles-materia/detalles-materia.component';
import { MateriasAlumnoComponent } from './detalles/materias-alumno/materias-alumno.component';
import { AlumnoMateriaComponent } from './relacionar/alumno-materia/alumno-materia.component';
import { ProfesorMateriaComponent } from './relacionar/profesor-materia/profesor-materia.component';
import { ProfesoresAlumnoComponent } from './detalles/profesores-alumno/profesores-alumno.component';
import { MateriasProfesorComponent } from './detalles/materias-profesor/materias-profesor.component';
import { AlumnosProfesorComponent } from './detalles/alumnos-profesor/alumnos-profesor.component';
import { AlumnoMateriaProfesorComponent } from './relacionar/alumno-materia-profesor/alumno-materia-profesor.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'alumnos/agregar', component: AgregarAlumnoComponent },
  { path: 'alumnos/all', component: AlumnoComponent },
  { path: 'alumnos/:id', component: AgregarAlumnoComponent },
  { path: 'alumnos/:id/materias', component: MateriasAlumnoComponent },
  { path: 'alumnos/:id/profesores', component: ProfesoresAlumnoComponent },
  { path: 'alumnos/:id/cargarMaterias', component: AlumnoMateriaComponent},
  { path: 'profesores/agregar', component: AgregarProfesorComponent },
  { path: 'profesores/all', component: ProfesorComponent },
  { path: 'profesores/:id', component: AgregarProfesorComponent },
  { path: 'profesores/:id/cargarMaterias', component: ProfesorMateriaComponent},
  { path: 'profesores/:id/materias', component: MateriasProfesorComponent},
  { path: 'profesores/:id/alumnos', component: AlumnosProfesorComponent},
  { path: 'materias/agregar', component: AgregarMateriaComponent },
  { path: 'materias/all', component: MateriasComponent },
  { path: 'materias/:id', component: AgregarMateriaComponent },
  { path: 'alumnos/:id/cargarMaterias/:idMateria/cargarProfesor', component: AlumnoMateriaProfesorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
