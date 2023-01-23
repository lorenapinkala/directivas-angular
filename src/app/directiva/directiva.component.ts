import { Component } from '@angular/core';
import { estudiante } from '../models/Estudiante';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {

  estudianteActual: estudiante = {
    nombre: 'Tomoko',
    edad: 15,
    estaActivo: true
  }

  listaEstudiantes: Array<estudiante> = [
    {
      nombre: 'Saitama',
      edad: 35,
      estaActivo: true
    },

    {
      nombre: 'Goku',
      edad: 45,
      estaActivo: true
    },

    {
      nombre: 'Naruto',
      edad: 10,
      estaActivo: false
    },

    {
      nombre: 'Eren',
      edad: 20,
      estaActivo: true
    },
  ];
}
