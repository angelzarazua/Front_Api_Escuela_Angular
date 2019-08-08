import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.component.html',
  styleUrls: ['./agregar-materia.component.css']
})
export class AgregarMateriaComponent implements OnInit {
  formAgregar: FormGroup;
  datas: any = [];
  datos: any;
  id: any;
  materia: any = [];
  isAlumnos: any = [];
  isMaterias: any = [];
  tamAlumno: any;
  tamMateria: any;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute

    ) {
        this.id = this.route.snapshot.paramMap.get('id');

    }

  ngOnInit() {
    this.formAgregar = this.formBuilder.group({
      nombre_materia: ['', Validators.required],
      horario_inicio: ['', Validators.required],
      horario_fin: ['', Validators.required],
    });

    if (this.id != null) {
      console.log('Hay id!');
      this.id = + this.route.snapshot.paramMap.get('id');
      this.api.getMateriaById(this.id).subscribe(response => {
        console.log('response', response);
        this.materia = response;
        console.log('Materia: ', this.materia.nombre_materia);
        // console.log('materia' + this.materia.nombre);
        this.formAgregar.get('nombre_materia').setValue(this.materia.nombre_materia);
        this.formAgregar.get('horario_inicio').setValue(this.materia.horario_inicio);
        this.formAgregar.get('horario_fin').setValue(this.materia.horario_fin);
      });

      this.api.getAlumnosByMaterias(this.id).subscribe(response => {
        console.log(response);
        this.isAlumnos = response;
        this.tamAlumno = this.isAlumnos.length;
        console.log('tamAlumno: ', this.tamAlumno);

      }, error => {
        console.log(error);
      });

      this.api.getProfesoresByMaterias(this.id).subscribe(response => {
        console.log(response);
        this.isMaterias = response;
        this.tamMateria = this.isMaterias.length;
        console.log('tamProfesor: ', this.tamMateria);
      }, error => {
        console.log(error);
      });
    }
  }

  agregar() {
    this.api.addMateria(this.formAgregar.value).subscribe(response => {
      this.datas = response.data;
      console.log('response: ' + response);
      this.router.navigate(['materias/all']);
    }, error => {
      console.log(error);
    });
  }

  guardar() {
    console.log('Estás editando');
    this.api.editAlumno(this.formAgregar.value, this.id).subscribe(response => {
      this.datas = response.data;
      console.log('response: ' + response);
      this.router.navigate(['alumnos/all']);
    }, error => {
      console.log(error);
    });
  }

  eliminar() {
    console.log('Estás eliminando');
    this.api.deleteMateria(this.id).subscribe(response => {
      this.datas = response.data;
      console.log('response: ' + response);
      this.router.navigate(['materias/all']);
    }, error => {
      console.log(error);
    });
  }

}
