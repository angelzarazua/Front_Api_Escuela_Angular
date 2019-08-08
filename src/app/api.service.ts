import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // baseUrl = 'http://178.128.65.246:5050/';
  baseUrl = 'http://54276313.ngrok.io/';
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllAlumnos(): Observable<any> {
    return this.http.get(this.baseUrl + 'relacion/alumnos/', {headers: this.httpHeaders});
  }

  getAlumnoById(id: string) {
    return this.http.get(`${this.baseUrl}relacion/detalles_alumno/${id}`);
  }

  addAlumno(params: string): Observable<any> {
    return this.http.post(this.baseUrl + 'relacion/alumnos/', params,  {headers: this.httpHeaders});
  }

  deleteAlumno(id: any): Observable<any> {
    console.log('Mandando los datos para eliminar item');
    return this.http.delete(`${this.baseUrl}relacion/detalles_alumno/${id}`);
  }

  editAlumno(item: any, id: any): Observable<any> {
    console.log('Mandando los datos para editar mi usuario. El ID es: ', id);
    return this.http.put( `${this.baseUrl}relacion/detalles_alumno/${id}`, item);
  }

  setMateriaProfesorToAlumno(item: any, id: any): Observable<any> {
    return this.http.post(`${this.baseUrl}relacion/detalles_alumno_materia/${id}`, item,  {headers: this.httpHeaders});
  }

  getProfesoresByAlumno(id: string) {
    return this.http.get(`${this.baseUrl}relacion/detalles_alumno_profesor/${id}`);
  }


// ------------------------------------------------ PROFESOR ------------------------------------------------

  getAllProfesores(): Observable<any> {
    return this.http.get(this.baseUrl + 'relacion/profesores/', {headers: this.httpHeaders});
  }

  getProfesorById(id: string) {
    return this.http.get(`${this.baseUrl}relacion/detalles_profesor/${id}`);
  }

  getMateriasProfesor(id: string) {
    return this.http.get(`${this.baseUrl}relacion/detalles_asignatura_profe/${id}`);
  }

  addProfesor(params: string): Observable<any> {
    return this.http.post(this.baseUrl + 'relacion/profesores/', params,  {headers: this.httpHeaders});
  }

  deleteProfesor(id: any): Observable<any> {
    console.log('Mandando los datos para eliminar item');
    return this.http.delete(`${this.baseUrl}relacion/detalles_profesor/${id}`);
  }

  editProfesor(item: any, id: any): Observable<any> {
    console.log('Mandando los datos para editar mi usuario');
    return this.http.put( `${this.baseUrl}relacion/detalles_profesor/${id}`, item);
  }

  cargarMateriasProfesor(item: any, id: any): Observable<any> {
    console.log('Mandando los datos para cargar materia');
    return this.http.post( `${this.baseUrl}relacion/detalles_profesor/${id}`, item);
  }

  // ------------------------------------------------ MATERIA ------------------------------------------------

  getAllMaterias(): Observable<any> {
    return this.http.get(this.baseUrl + 'relacion/asignatura/', {headers: this.httpHeaders});
  }

  getMateriaById(id: string) {
    return this.http.get(`${this.baseUrl}relacion/detalles_asignatura/${id}`);
  }

  addMateria(params: string): Observable<any> {
    return this.http.post(this.baseUrl + 'relacion/asignatura/', params,  {headers: this.httpHeaders});
  }

  deleteMateria(id: any): Observable<any> {
    console.log('Mandando los datos para eliminar item');
    return this.http.delete(`${this.baseUrl}relacion/detalles_asignatura/${id}`);
  }

  editMateria(item: any): Observable<any> {
    console.log('Mandando los datos para editar mi usuario');
    return this.http.put( `${this.baseUrl}relacion/detalles_asignatura/${item.id}`, item);
  }

  getMateriasByAlumno(id: string) {
    return this.http.get(`${this.baseUrl}relacion/detalles_alumno_materia/${id}`);
  }

  getMateriasProfesor2(id: string) {
    return this.http.get(`${this.baseUrl}relacion/detalles_profesor_materia/${id}`);
  }

  getAlumnosByProfesor(id: string) {
    return this.http.get(`${this.baseUrl}relacion/detalles_profesor_alumno/${id}`);
  }

  deleteMateriaByProfesor(item: any, id: any) {
    console.log('Lo que hay en APi: ', item);
    return this.http.post(`${this.baseUrl}relacion/delete_profesor_materia/${id}`, item, {headers: this.httpHeaders});
  }

  getAlumnosByMaterias(id: string) {
    return this.http.get(`${this.baseUrl}relacion/detalles_asignatura_alumno/${id}`);
  }

  getProfesoresByMaterias(id: string) {
    return this.http.get(`${this.baseUrl}relacion/detalles_asignatura_profe/${id}`);
  }
}
