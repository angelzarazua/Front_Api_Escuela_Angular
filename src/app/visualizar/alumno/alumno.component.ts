import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  alumnos: any;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getAllAlumnos().subscribe(response => {
      console.log(response);
      this.alumnos = response;
    }, error => {
      console.log('error');
    });
  }

}
