import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materias-alumno',
  templateUrl: './materias-alumno.component.html',
  styleUrls: ['./materias-alumno.component.css']
})
export class MateriasAlumnoComponent implements OnInit {
  materias: any = [];
  id: any;
  @Input() public name: string;


  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
  ) {
      this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.api.getMateriasByAlumno(this.id).subscribe(response => {
      this.materias = response;
      console.log(this.materias);
      console.log('Sacando mat: ', this.materias.my_matery[0]);
      this.materias =  this.materias.my_matery;
      console.log('Después: ', this.materias);
    }, error => {
      console.log('error');
    });
  }

}
