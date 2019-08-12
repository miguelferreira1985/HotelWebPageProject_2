import { Injectable } from '@angular/core';

@Injectable()
export class FacilitiesService{

    private facilities: Facility [] =[
        {
            name: "Hotel Maria's Nicte-He",
            description: "Vista exterior de nuestras intalaciones, al pasar esa puerta iniciara su mejor experiencia en hospedaje...",
            img: "../../../assets/img/exterior/ExteriorHotel.jpg"
          },
          {
            name: "Piscina Nicte-Ha",
            description: "Piscina ubicada en el jardin del hotel, de us exclusivo para los huespedes y aerea de poca profundidad para los niños...",
            img: "../../../assets/img/exterior/ImagenExterior_03.jpeg"
          },
          {
            name: "Entrada y Area de descando",
            description: "Entrada al hotel y area de descansoen la cual podra descansar unos momentos sintiendo la agradable brisa despues de su paseo...",
            img: "../../../assets/img/exterior/ImagenExterior_04.jpeg"
          },
          {
            name: "Area de Hamacas y Descanso",
            description: "Relajese y descanse un rato en nuestra area de hamacas...",
            img: "../../../assets/img/exterior/ImagenExterior_05.jpg"
          },
          {
            name: "Area de Hamacas y Descanso",
            description: "Vista de nuestra area de hamacas disenada para que los huespedes tomen un tiempo de descanso al momento que disfrutan la agradable brisa de nuestra hermosa ciudad...",
            img: "../../../assets/img/exterior/ImagenExterior_06.JPG"
          },
          {
            name: "Area de Hamacas y Descanso",
            description: "Traiga un libro, pongase sus audifonos con su musica preferida o solo acuestese en una de nuestras hamacas a relajarse, usted decide...",
            img: "../../../assets/img/exterior/ImagenExterior_07.JPG"
          },
          {
            name: "Area de Descanso",
            description: "Disfrute de la experiencia de disfrutar de la agradable brisa relajandose en una hamaca...",
            img: ".../../../assets/img/exterior/ImagenExterior_08.JPG"
          },
          {
            name: "Area de Hamacas y Descanso",
            description: "Esta area tambien la puede aprovechar para pasar momentos de sana convivencia con familiares y amigos durante su estancia...",
            img: "../../../assets/img/exterior/ImagenExterior_09.JPG"
          },
          {
            name: "Piscina Nicte-Ha",
            description: "Ya sea que quiera darse un chapuson para refrescarse o simplemente relajarse un rato en uno de nuestros camastros...",
            img: "../../../assets/img/exterior/ImagenExterior_17.jpg"
          },
          {
            name: "Piscina Nicte-Ha",
            description: "",
            img: "../../../assets/img/exterior/ImagenExterior_19.jpg"
          },
          {
            name: "Pasillo",
            description: "",
            img: "../../../assets/img/exterior/ImagenExterior_20.JPG"
          },
          {
            name: "Piscina",
            description: "",
            img: "../../../assets/img/exterior/ImagenExterior_21.JPG"
          },
          {
            name: "Piscina",
            description: "",
            img: "../../../assets/img/exterior/ImagenExterior_28.jpg"
          },
          {
            name: "Piscina",
            description: "",
            img: "../../../assets/img/exterior/ImagenExterior_29.jpeg"
          },
          {
            name: "Recepcion",
            description: "",
            img: "../../../assets/img/exterior/ImagenExterior_30.jpeg"
          },
          {
            name: "Recepcion",
            description: "",
            img: "../../../assets/img/exterior/ImagenExterior_31.jpeg"
          },
          {
            name: "Entrada",
            description: "",
            img: "../../../assets/img/exterior/ImagenExterior_33.jpeg"
          },
          {
            name: "Renta de Bicicletas",
            description: "Tenemos a su disposicion bicicletas para rentar, con ellas podra recorrer la hemosa ciudad...",
            img: "../../../assets/img/exterior/ImagenExterior_34.jpeg"
          },
          {
            name: "Area de Descanso",
            description: "",
            img: "../../../assets/img/exterior/ImagenExterior_35.jpeg"
          },
          {
            name: "Area de Descanso",
            description: "",
            img: "../../../assets/img/exterior/ImagenExterior_36.jpeg"
          },
          {
            name: "Area de Descanso",
            description: "",
            img: "../../../assets/img/exterior/ImagenExterior_37.jpeg"
          },
          {
            name: "Area de Descanso",
            description: "",
            img: "../../../assets/img/exterior/ImagenExterior_39.jpeg"
          },
          {
            name: "Area de Descanso",
            description: "",
            img: "../../../assets/img/exterior/ImagenExterior_40.jpeg"
          },
          {
            name: "Area de Descanso",
            description: "",
            img: "../../../assets/img/exterior/ImagenExterior_41.jpeg"
          },
          {
            name: "Area de Descanso",
            description: "",
            img: "../../../assets/img/exterior/ImagenExterior_42.jpg"
          }
    ];

    constructor(){}

    getFacilities(): Facility[]{
        return this.facilities;
    }
}

export interface Facility{
    name: string;
    description: string;
    img: string;
}