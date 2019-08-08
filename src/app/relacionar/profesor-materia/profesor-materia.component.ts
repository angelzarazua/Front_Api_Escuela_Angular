import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profesor-materia',
  templateUrl: './profesor-materia.component.html',
  styleUrls: ['./profesor-materia.component.css']
})
export class ProfesorMateriaComponent implements OnInit {
  formAgregar: FormGroup;
  materias: any = [];
  materiasEscogidas: any = [];
  id: any;
  profesor: any = [];
  isMateria: any;
  yaCargo: any = [];


  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.api.getAllMaterias().subscribe(response => {
      console.log(response);
      this.materias = response;
    }, error => {
      console.log('error');
    });

    this.api.getProfesorById(this.id).subscribe(response => {
      this.profesor = response;
      this.isMateria = this.profesor.my_matery_professor;
      console.log('isMateria: ', this.isMateria);
      if (this.isMateria == null) {
        console.log('Es nulo');

      } else {
        console.log('No es nulo');
      }
    }, error => {
      console.log(error);
    });
    console.log('a ver ', this.profesor);

    this.api.getMateriasProfesor2(this.id).subscribe(response => {
      console.log('getMAtPro2: ', response);
      this.yaCargo = response;
    }, error => {
      console.log('error');
    });

    this.formAgregar = this.formBuilder.group({
      my_matery_professor: ['']
    });
    // this.api.getMateriasProfesor(this.id).subscribe(response => {
    //   console.log(response);
    //   this.materias = response;
    // }, error => {
    //   console.log('error');
    // });
  }

  cargarMaterias() {
    console.log('Materias escogidas: ', this.materiasEscogidas);
    this.formAgregar.get('my_matery_professor').setValue(this.materiasEscogidas);
    this.api.cargarMateriasProfesor(this.formAgregar.value, this.id).subscribe(response => {
      console.log(response);
      this.materias = response;
      this.router.navigate(['profesores/all']);
    }, error => {
      console.log('error');
    });
  }

  selectMateria(e, id) {
    if (e.target.checked) {
      console.log('Metido: ', id);
      this.materiasEscogidas.push(id);
    }  else {
      console.log('sacado: ', id);
      this.materiasEscogidas.splice(this.materiasEscogidas.indexOf(id), 1);
    }
    console.log('Todas Materias: ', this.materiasEscogidas);
  }
}
