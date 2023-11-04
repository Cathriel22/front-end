import { Component } from '@angular/core';
import { peliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css'],
})
export class EditarPeliculaComponent {
  modelo: peliculaDTO = {
    titulo: 'Spider-Man',
    trailer: 'abc',
    enCines: true,
    resumen: 'xxx',
    fechaLanzamiento: new Date(),
    poster:
      'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/At7kpPioyCSPENS5x6gHesjR.png',
  };

  guardarCambios(pelicula: peliculaDTO) {
    console.log(pelicula);
  }
}
