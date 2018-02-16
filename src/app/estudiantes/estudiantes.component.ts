import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})

export class EstudiantesComponent implements OnInit {
  @Input() universidad: string;
  titulo = "lista de estudiantes";
  estudiantes = ['Estudiante uno', 'Estudiante dos', 'Estudiante tres'];
  redondeadas = false;
  padding = true;

  cambiar(evento) {
    this.titulo = evento.target.value;
  }

  listadeestudiantes(): Array<string> {
    if (this.universidad == 'la universidad nacional') {
      return ['Estudiante numero uno', 'Estudiante numero dos', 'Estudiante numero tres'];
    }
    else {
      return ['Estudiante para uno'];
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
