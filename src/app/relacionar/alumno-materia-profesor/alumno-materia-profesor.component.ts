import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-materia-profesor',
  templateUrl: './alumno-materia-profesor.component.html',
  styleUrls: ['./alumno-materia-profesor.component.css']
})
export class AlumnoMateriaProfesorComponent implements OnInit {
  idAlumno: any;
  idMateria: any;
  datas: any = [];
  idProfesor: any;
  profesores: any = [];
  formAgregar: FormGroup;
  idMateriaArray = [];
  idProfesorArray = [];


  constructor(
    private router: Router,
    private api: ApiService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.idAlumno = this.route.snapshot.paramMap.get('id');
    this.idMateria = this.route.snapshot.paramMap.get('idMateria');
  }

  ngOnInit() {
    this.api.getMateriasProfesor(this.idMateria).subscribe(response => {
      console.log(response);
      this.profesores = response;
      console.log('Con . : ', this.profesores[0].nombre);
      // console.log('Materias: ', this.profesores[0].my_matery_professor[0].nombre_materia);
    }, error => {
      console.log('error');
    });

    this.formAgregar = this.formBuilder.group({
      my_matery: ['', Validators.required],
      my_profesor: ['', Validators.required]
    });
  }

  agregar(idProfesor: any) {
    this.idMateriaArray.push(this.idMateria);
    this.idProfesorArray.push(idProfesor);

    this.formAgregar.get('my_matery').setValue(this.idMateriaArray);
    this.formAgregar.get('my_profesor').setValue(this.idProfesorArray);
    console.log('Id profesor: ', this.idProfesorArray);
    console.log('Id Alumno: ', this.idAlumno);
    this.api.setMateriaProfesorToAlumno(this.formAgregar.value, this.idAlumno).subscribe(response => {
      this.datas = response.data;
      console.log('response: ' + response);
      this.router.navigate(['alumnos', this.idAlumno]);
    }, error => {
      console.log(error);
    });
  }

}
