import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDto } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css'],
})
export class EditarActorComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  modelo: actorDto = { nombre: 'Luis', fechaNacimiento: new Date(), foto: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Tom_Holland_Bali_2019_1_%28cropped%29_%28cropped%29.jpg' };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // alert(params.id);
    });
  }

  guardarCambios(actor: actorCreacionDTO) {
    console.log(actor);
  }
}
