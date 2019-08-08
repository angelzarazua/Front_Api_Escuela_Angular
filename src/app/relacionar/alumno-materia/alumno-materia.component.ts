import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno-materia',
  templateUrl: './alumno-materia.component.html',
  styleUrls: ['./alumno-materia.component.css']
})
export class AlumnoMateriaComponent implements OnInit {
  materias: any = [];
  id: any = [];
  verMateria: any;
  idMateria: any;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.idMateria = this.route.snapshot.paramMap.get('idMateria');

   }

  ngOnInit() {
    this.api.getAllMaterias().subscribe(response => {
      console.log(response);
      this.materias = response;
      // console.log('Materias: ', this.profesores[0].my_matery_professor[0].nombre_materia);
    }, error => {
      console.log('error');
    });
  }

}
