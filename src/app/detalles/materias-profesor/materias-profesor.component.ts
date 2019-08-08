import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-materias-profesor',
  templateUrl: './materias-profesor.component.html',
  styleUrls: ['./materias-profesor.component.css']
})
export class MateriasProfesorComponent implements OnInit {
  id: any;
  materias: any = [];
  formAgregar: FormGroup;
  idMateriaArray = [];

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

   }

  ngOnInit() {
    this.api.getMateriasProfesor2(this.id).subscribe(response => {
      console.log(response);
      this.materias = response;
      this.materias = this.materias.my_matery_professor;
    }, error => {
      console.log('error');
    });

    this.formAgregar = this.formBuilder.group({
      my_matery_professor: ['']
    });
  }

  eliminar(idMateria: any) {
    console.log('id Materia borrar: ', idMateria);
    // idMateria = JSON.parse(idMateria);
    this.idMateriaArray.push(idMateria);
    this.formAgregar.get('my_matery_professor').setValue(idMateria);
    console.log('Dentro del form: ', this.formAgregar.value);

    this.api.deleteMateriaByProfesor(this.formAgregar.value, this.id).subscribe(response => {
      console.log(response);
      this.router.navigate(['profesores', this.id]);
    }, error => {
      console.log('error');
    });
  }

}
