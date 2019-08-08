import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-detalles-alumno',
  templateUrl: './detalles-alumno.component.html',
  styleUrls: ['./detalles-alumno.component.css']
})
export class DetallesAlumnoComponent implements OnInit {
  alumno: any = [] ;
  // formEdit: FormGroup;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,

  ) {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.id = + this.route.snapshot.paramMap.get('id');
    this.api.getAlumnoById(this.id).subscribe(response => {
      console.log('response', response);
      this.alumno = response;
      console.log('nombre: ', this.alumno.nombre);
      // console.log('alumno' + this.alumno.nombre);
    });
  }

  ngOnInit() {
  }

}
