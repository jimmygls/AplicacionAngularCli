import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/common/src/facade/async';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})

export class EstudiantesComponent implements OnInit {
  @Input('mi-universidad') universidad: string;
  @Output() selecionado = new EventEmitter();
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

  clickEnEstudiante(evento): void {
    this.selecionado.emit({ nombre: evento.target.textContent });
  }

  constructor() { }

  ngOnInit() {
  }

}
