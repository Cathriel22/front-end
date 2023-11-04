import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css'],
})
export class EditarGeneroComponent {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  modelo: generoCreacionDTO = { nombre: 'Drama' };
  
  guardarCambios(genero: generoCreacionDTO) {
    // ... guarda los cambios
    console.log(genero);
    this.router.navigate(['/generos']);
  }
}
