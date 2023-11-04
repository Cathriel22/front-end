import { Component } from '@angular/core';
import { cineCreacionDto, cineDto } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css'],
})
export class EditarCineComponent {
  modelo: cineDto = {
    nombre: 'Zambil',
    latitud: -11.896333790811719,
    longitud: -77.04420089721681,
  };

  guardarCambios(cine: cineCreacionDto) {
    console.log(cine);
  }
}
