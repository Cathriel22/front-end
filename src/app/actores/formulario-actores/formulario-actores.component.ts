import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css'],
})
export class FormularioActoresComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  @Input()
  modelo: actorCreacionDTO;

  @Output()
  OnSubmit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required] }],
      fechaNacimiento: '',
      foto: '',
      biografia: ''
    });

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  form: FormGroup;

  archivoSeleccionado(file){
    this.form.get('foto').setValue(file);
  }

  onSubmit(){
    this.OnSubmit.emit(this.form.value);
  }

  cambioMarkdown(texto: string){
    this.form.get('biografia').setValue(texto);
  }
}
