import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  materias: any;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getAllMaterias().subscribe(response => {
      console.log(response);
      this.materias = response;
    }, error => {
      console.log('error');
    });
  }

}
