import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  profesores: any;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getAllProfesores().subscribe(response => {
      console.log(response);
      this.profesores = response;
    }, error => {
      console.log('error');
    });
  }

}
