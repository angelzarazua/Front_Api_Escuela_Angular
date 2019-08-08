import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-profesores-alumno',
  templateUrl: './profesores-alumno.component.html',
  styleUrls: ['./profesores-alumno.component.css']
})
export class ProfesoresAlumnoComponent implements OnInit {
  id: any;
  profesores: any = [];
  todos: any = [];


  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    this.api.getProfesoresByAlumno(this.id).subscribe(response => {
      console.log(response);
      this.profesores = response;
      this.todos = this.profesores.my_profesor;
      console.log('Profesores: ', this.profesores.my_profesor);
    }, error => {
      console.log('error');
    });
  }

}
