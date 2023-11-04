import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  ngOnInit(): void {
    this.peliculasEnCines = [
      {
        titulo: 'Spider-man',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster:
          'https://i5.walmartimages.com/asr/9e8c3b1f-4217-4fdc-8071-95c24487fc02.f241660ccc0a732955a1de5e9985d3a2.jpeg',
      },
      {
        titulo: 'Iron Man',
        fechaLanzamiento: new Date(),
        precio: 1100.99,
        poster: 'https://cde.3.elcomercio.pe/ima/0/1/0/6/7/1067291.jpg',
      },
    ];
  }
  title = 'front-end-322';

  peliculasEnCines;
  peliculasProximosEstrenos = [];
}
