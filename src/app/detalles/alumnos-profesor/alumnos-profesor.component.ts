import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumnos-profesor',
  templateUrl: './alumnos-profesor.component.html',
  styleUrls: ['./alumnos-profesor.component.css']
})
export class AlumnosProfesorComponent implements OnInit {
  id: any;
  alumnos: any = [];
  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.api.getAlumnosByProfesor(this.id).subscribe(response => {
      console.log(response);
      this.alumnos = response;
    }, error => {
      console.log('error');
    });
  }

}
