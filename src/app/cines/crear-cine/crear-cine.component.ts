import { Component } from '@angular/core';
import { cineCreacionDto } from '../cine';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css'],
})
export class CrearCineComponent {
  guardarCambios(cine: cineCreacionDto) {
    console.log(cine);
  }
}
