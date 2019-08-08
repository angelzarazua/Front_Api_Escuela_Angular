import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {
  formAgregar: FormGroup;
  datas: any = [];
  datos: any;
  id: any;
  alumno: any = [];
  name: any;
  exprRegEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

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
      nombre: ['', Validators.required],
      apellido_paterno: ['', Validators.required],
      apellido_materno: ['', Validators.required],
      edad: ['', Validators.required],
      direccion: ['', Validators.required],
      correo_electronico: ['', Validators.compose([Validators.required, Validators.pattern(this.exprRegEmail)])],
      genero: ['', Validators.required]
    });
    // this.formAgregar.get('nombre').setValue('Roberto');
    if (this.id != null) {
      console.log('Hay id! ', this.id);
      this.id = + this.route.snapshot.paramMap.get('id');
      this.api.getAlumnoById(this.id).subscribe(response => {
        console.log('response', response);
        this.alumno = response;
        console.log('nombre: ', this.alumno.nombre);
        this.name = this.alumno.nombre;
        // console.log('alumno' + this.alumno.nombre);
        this.formAgregar.get('nombre').setValue(this.alumno.nombre);
        this.formAgregar.get('apellido_paterno').setValue(this.alumno.apellido_paterno);
        this.formAgregar.get('apellido_materno').setValue(this.alumno.apellido_materno);
        this.formAgregar.get('edad').setValue(this.alumno.edad);
        this.formAgregar.get('direccion').setValue(this.alumno.direccion);
        this.formAgregar.get('correo_electronico').setValue(this.alumno.correo_electronico);
        this.formAgregar.get('genero').setValue(this.alumno.genero);
      });
    }

  }

  agregar() {
    // alert(JSON.stringify(this.formAgregar.value));
    this.api.addAlumno(this.formAgregar.value).subscribe(response => {
      this.datas = response.data;
      console.log('response: ' + response);
      this.router.navigate(['alumnos/all']);
    }, error => {
      console.log(error);
    });
    // this.datos = {
    //   data: this.formAgregar.value
    // };
    // console.log('Datos: ', this.datos, 'Uno: ', this.datos.data.nombre);
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
    this.api.deleteAlumno(this.id).subscribe(response => {
      this.datas = response.data;
      console.log('response: ' + response);
      this.router.navigate(['alumnos/all']);
    }, error => {
      console.log(error);
    });
  }

}
