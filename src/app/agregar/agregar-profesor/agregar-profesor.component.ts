import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-profesor',
  templateUrl: './agregar-profesor.component.html',
  styleUrls: ['./agregar-profesor.component.css']
})
export class AgregarProfesorComponent implements OnInit {
  formAgregar: FormGroup;
  datas: any = [];
  datos: any;
  uno = [1];
  id: any;
  profesor: any = [];
  isMaterias: any;

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
      correo_electronico: ['', Validators.required],
      genero: ['', Validators.required],
      // my_matery_professor: [this.uno]
    });

    if (this.id != null) {
      console.log('Hay id!');
      this.id = + this.route.snapshot.paramMap.get('id');
      this.api.getProfesorById(this.id).subscribe(response => {
        console.log('response', response);
        this.profesor = response;
        console.log('nombre: ', this.profesor.nombre);
        // console.log('profesor' + this.profesor.nombre);
        this.formAgregar.get('nombre').setValue(this.profesor.nombre);
        this.formAgregar.get('apellido_paterno').setValue(this.profesor.apellido_paterno);
        this.formAgregar.get('apellido_materno').setValue(this.profesor.apellido_materno);
        this.formAgregar.get('edad').setValue(this.profesor.edad);
        this.formAgregar.get('direccion').setValue(this.profesor.direccion);
        this.formAgregar.get('correo_electronico').setValue(this.profesor.correo_electronico);
        this.formAgregar.get('genero').setValue(this.profesor.genero);
        this.isMaterias = this.profesor.my_matery_professor;
        console.log('IsMAteria: ', this.isMaterias);
      });
    }
  }

  agregar() {
    // alert(JSON.stringify(this.formAgregar.value));
    this.api.addProfesor(this.formAgregar.value).subscribe(response => {
      this.datas = response.data;
      console.log('response: ' + response);
      this.router.navigate(['profesores/all']);
    }, error => {
      console.log(error);
    });
  }

  guardar() {
    console.log('Estás editando');
    this.api.editProfesor(this.formAgregar.value, this.id).subscribe(response => {
      this.datas = response.data;
      console.log('response: ' + response);
      this.router.navigate(['profesores/all']);
    }, error => {
      console.log(error);
    });
  }

  eliminar() {
    console.log('Estás Eliminado');
    this.api.deleteProfesor(this.id).subscribe(response => {
      this.datas = response.data;
      console.log('response: ' + response);
      this.router.navigate(['profesores/all']);
    }, error => {
      console.log(error);
    });
  }

}
