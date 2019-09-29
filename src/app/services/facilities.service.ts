import { Injectable } from '@angular/core';

@Injectable()
export class FacilitiesService{

    private facilities: Facility [] =[
        {
            name: "Hotel Maria's Nicte-Ha",
            //description: "Vista exterior de nuestras intalaciones, al pasar esa puerta iniciara su mejor experiencia en hospedaje...",
            img: "../../../assets/img/exterior/ExteriorHotel.jpg"
          },
          {
            name: "Acceso de Cuartos hacia la Terraza y Piscina",
            //description: "Piscina ubicada en el jardin del hotel, de us exclusivo para los huespedes y aerea de poca profundidad para los niños...",
            img: "../../../assets/img/exterior/ImagenExterior_01.jpeg"
          },
          {
            name: "Acceso de Cuartos hacia la Terraza y Piscina",
            //description: "Piscina ubicada en el jardin del hotel, de us exclusivo para los huespedes y aerea de poca profundidad para los niños...",
            img: "../../../assets/img/exterior/ImagenExterior_02.jpeg"
          },
          {
            name: "Piscina Nicte-Ha",
            //description: "Piscina ubicada en el jardin del hotel, de us exclusivo para los huespedes y aerea de poca profundidad para los niños...",
            img: "../../../assets/img/exterior/ImagenExterior_03.jpeg"
          },
          {
            name: "Entrada y Area de descando",
            //description: "Entrada al hotel y area de descansoen la cual podra descansar unos momentos sintiendo la agradable brisa despues de su paseo...",
            img: "../../../assets/img/exterior/ImagenExterior_04.jpeg"
          },
          {
            name: "Area de Hamacas y Descanso",
            //description: "Relajese y descanse un rato en nuestra area de hamacas...",
            img: "../../../assets/img/exterior/ImagenExterior_05.jpg"
          },
          {
            name: "Area de Hamacas y Descanso",
            //description: "Vista de nuestra area de hamacas disenada para que los huespedes tomen un tiempo de descanso al momento que disfrutan la agradable brisa de nuestra hermosa ciudad...",
            img: "../../../assets/img/exterior/ImagenExterior_06.JPG"
          },
          {
            name: "Area de Hamacas y Descanso",
            //description: "Traiga un libro, pongase sus audifonos con su musica preferida o solo acuestese en una de nuestras hamacas a relajarse, usted decide...",
            img: "../../../assets/img/exterior/ImagenExterior_07.JPG"
          },
          {
            name: "Area de Descanso",
            //description: "Disfrute de la experiencia de disfrutar de la agradable brisa relajandose en una hamaca...",
            img: ".../../../assets/img/exterior/ImagenExterior_08.JPG"
          },
          {
            name: "Area de Hamacas y Descanso",
            //description: "Esta area tambien la puede aprovechar para pasar momentos de sana convivencia con familiares y amigos durante su estancia...",
            img: "../../../assets/img/exterior/ImagenExterior_09.JPG"
          },
          {
            name: "Piscina Nicte-Ha",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_11.jpeg"
          },
          {
            name: "Area de Descanso y Hamacas",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_12.jpeg"
          },
          {
            name: "Pasillo planta alta",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_13.jpeg"
          },
          {
            name: "Recepcion",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_14.jpeg"
          },
          {
            name: "Area de lectura interior",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_15.jpeg"
          },
          {
            name: "Area de Descanso y Hamacas",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_16.jpeg"
          },
          {
            name: "Piscina Nicte-Ha",
            //description: "Ya sea que quiera darse un chapuson para refrescarse o simplemente relajarse un rato en uno de nuestros camastros...",
            img: "../../../assets/img/exterior/ImagenExterior_17.jpg"
          },
          {
            name: "Terraza en el Jardin",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_18.jpeg"
          },
          {
            name: "Piscina Nicte-Ha",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_19.jpg"
          },
          {
            name: "Piscina Nicte-Ha",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_20.JPG"
          },
          {
            name: "Piscina Nicte-Ha",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_21.JPG"
          },
          {
            name: "Area de Descanso y Acceso al Hotel",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_22.jpeg"
          },
          {
            name: "Terraza en el Jardin",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_23.jpeg"
          },
          {
            name: "Piscina Nicte-Ha",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_24.jpeg"
          },
          {
            name: "Cocina Compartida",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_25.jpeg"
          },
          {
            name: "Escaleras de Acceso a Planta Alta",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_26.jpeg"
          },
          {
            name: "Cocina Compartida",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_27.jpeg"
          },
          {
            name: "Terraza junto a Piscina Nicte-Ha",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_28.jpg"
          },
          {
            name: "Entrada y Area de Descanso",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_29.jpeg"
          },
          {
            name: "Piscina y Terraza Nicte-Ha",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_30.jpeg"
          },
          {
            name: "Terraza Interior",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_31.jpeg"
          },
          {
            name: "Pasillo",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_32.jpeg"
          },
          {
            name: "Area de Descanso y Hamacas",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_33.jpeg"
          },
          {
            name: "Cocina Compartida",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_35.jpeg"
          },
          {
            name: "Cocina Compartida",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_36.jpeg"
          },
          {
            name: "Piscina Nicte-Ha",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_37.jpeg"
          },
          {
            name: "Terraza en el Jardin",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_38.jpeg"
          },
          {
            name: "Recepcion Nicte-Ha",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_39.jpeg"
          },
          {
            name: "Area de Descanso y Hamacas",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_40.jpeg"
          },
          {
            name: "Area de Descanso y Hamacas",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_41.jpeg"
          },
          {
            name: "Piscina Nicte-Ha",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_42.jpg"
          },
          {
            name: "Entrada Casita Nicte-Ha",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_43.jpeg"
          },
          {
            name: "Terraza y Jardin Nicte-HA",
            //description: "",
            img: "../../../assets/img/exterior/ImagenExterior_44.jpeg"
          }
    ];

    constructor(){}

    getFacilities(): Facility[]{
        return this.facilities;
    }
}

export interface Facility{
    name: string;
    //description: string;
    img: string;
}