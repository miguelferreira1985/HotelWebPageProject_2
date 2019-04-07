import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  providers: [NgbCarouselConfig]
})
export class GalleryComponent implements OnInit {

  images:any [] = [
    {
      nombre: "Pasillo",
      img: "../../../assets/img/exterior/ImagenExterior_02.jpeg"
    },
    {
      nombre: "Fuente",
      img: "../../../assets/img/exterior/ImagenExterior_04.jpeg"
    },
    {
      nombre: "Area de Hamacas",
      img: "../../../assets/img/exterior/ImagenExterior_05.jpg"
    },
    {
      nombre: "Area de Descanso",
      img: "../../../assets/img/exterior/ImagenExterior_06.JPG"
    },
    {
      nombre: "Area de Descanso",
      img: "../../../assets/img/exterior/ImagenExterior_07.JPG"
    },
    {
      nombre: "Area de Descanso",
      img: ".../../../assets/img/exterior/ImagenExterior_08.JPG"
    },
    {
      nombre: "Area de Descanso",
      img: "../../../assets/img/exterior/ImagenExterior_09.JPG"
    },
    {
      nombre: "Area de Descanso",
      img: "../../../assets/img/exterior/ImagenExterior_17.jpg"
    },
    {
      nombre: "Jardin",
      img: "../../../assets/img/exterior/ImagenExterior_19.jpg"
    },
    {
      nombre: "Pasillo",
      img: "../../../assets/img/exterior/ImagenExterior_20.JPG"
    },
    {
      nombre: "Piscina",
      img: "../../../assets/img/exterior/ImagenExterior_21.JPG"
    },
   {
      nombre: "Piscina",
      img: "../../../assets/img/exterior/ImagenExterior_22.jpg"
   },
     {
      nombre: "Piscina",
      img: "../../../assets/img/exterior/ImagenExterior_23.jpg"
    },
    {
      nombre: "Piscina",
      img: "../../../assets/img/exterior/ImagenExterior_24.jpg"
    },
    {
      nombre: "Piscina",
      img: "../../../assets/img/exterior/ImagenExterior_25.jpg"
    },
    {
      nombre: "Piscina",
      img: "../../../assets/img/exterior/ImagenExterior_28.jpg"
    },
    {
      nombre: "Piscina",
      img: "../../../assets/img/exterior/ImagenExterior_29.jpeg"
    },
    {
      nombre: "Recepcion",
      img: "../../../assets/img/exterior/ImagenExterior_30.jpeg"
    },
    {
      nombre: "Recepcion",
      img: "../../../assets/img/exterior/ImagenExterior_31.jpeg"
    },
    {
      nombre: "Entrada",
      img: "../../../assets/img/exterior/ImagenExterior_33.jpeg"
    },
    {
      nombre: "Entrada",
      img: "../../../assets/img/exterior/ImagenExterior_34.jpeg"
    },
    {
      nombre: "Area de Descanso",
      img: "../../../assets/img/exterior/ImagenExterior_35.jpeg"
    },
    {
      nombre: "Area de Descanso",
      img: "../../../assets/img/exterior/ImagenExterior_36.jpeg"
    },
    {
      nombre: "Area de Descanso",
      img: "../../../assets/img/exterior/ImagenExterior_37.jpeg"
    },
    {
      nombre: "Area de Descanso",
      img: "../../../assets/img/exterior/ImagenExterior_38.jpeg"
    }
  ];

  constructor(config: NgbCarouselConfig) { 
    // customiza default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = false;

  }

  ngOnInit() {
  }

}
