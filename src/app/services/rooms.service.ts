import { Injectable } from '@angular/core';

@Injectable()
export class RoomsService{

    private rooms: Room [] =[
        {
            name: "Casita Nicte-Ha",
            //description: "Vista exterior de nuestras intalaciones, al pasar esa puerta iniciara su mejor experiencia en hospedaje...",
            img: "../../../assets/img/habitaciones/Casita_1.jpeg"
          },
          {
            name: "Casita Nicte-Ha",
            //description: "Piscina ubicada en el jardin del hotel, de us exclusivo para los huespedes y aerea de poca profundidad para los niños...",
            img: "../../../assets/img/habitaciones/Casita_2.jpeg"
          },
          {
            name: "Casita Nicte-Ha",
            //description: "Entrada al hotel y area de descansoen la cual podra descansar unos momentos sintiendo la agradable brisa despues de su paseo...",
            img: "../../../assets/img/habitaciones/Casita_3.jpeg"
          },
          {
            name: "Casita Nicte-Ha",
            //description: "Relajese y descanse un rato en nuestra area de hamacas...",
            img: "../../../assets/img/habitaciones/Casita_4.jpeg"
          },
          {
            name: "Casita Nicte-Ha",
            //description: "Relajese y descanse un rato en nuestra area de hamacas...",
            img: "../../../assets/img/habitaciones/Casita_5.jpeg"
          },
          {
            name: "Casita Nicte-Ha",
            //description: "Relajese y descanse un rato en nuestra area de hamacas...",
            img: "../../../assets/img/habitaciones/Casita_5.jpeg"
          },
          {
            name: "Casita Nicte-Ha",
            //description: "Relajese y descanse un rato en nuestra area de hamacas...",
            img: "../../../assets/img/habitaciones/Casita_6.jpeg"
          },
          {
            name: "Casita Nicte-Ha",
            //description: "Relajese y descanse un rato en nuestra area de hamacas...",
            img: "../../../assets/img/habitaciones/Casita_7.jpeg"
          },
          {
            name: "Casita Nicte-Ha",
            //description: "Relajese y descanse un rato en nuestra area de hamacas...",
            img: "../../../assets/img/habitaciones/Casita_8.jpeg"
          },
          {
            name: "Casita Nicte-Ha",
            //description: "Relajese y descanse un rato en nuestra area de hamacas...",
            img: "../../../assets/img/habitaciones/Casita_9.jpeg"
          },
          {
            name: "Casita Nicte-Ha",
            //description: "Relajese y descanse un rato en nuestra area de hamacas...",
            img: "../../../assets/img/habitaciones/Casita_10.jpeg"
          },
          {
            name: "Casita Nicte-Ha",
            //description: "Relajese y descanse un rato en nuestra area de hamacas...",
            img: "../../../assets/img/habitaciones/Casita_11.jpeg"
          },
          {
            name: "Casita Nicte-Ha",
            //description: "Relajese y descanse un rato en nuestra area de hamacas...",
            img: "../../../assets/img/habitaciones/Casita_12.jpeg"
          },
          {
            name: "Casita Nicte-Ha",
            //description: "Relajese y descanse un rato en nuestra area de hamacas...",
            img: "../../../assets/img/habitaciones/Casita_14.jpeg"
          },
          {
            name: "Estudio Estandar",
            //description: "",
            img: "../../../assets/img/habitaciones/D1_1.jpeg"
          },
          {
            name: "Estudio Estandar",
            //description: "",
            img: "../../../assets/img/habitaciones/D1_2.jpeg"
          },
          {
            name: "Estudio Estandar",
            //description: "",
            img: "../../../assets/img/habitaciones/D1_3.jpeg"
          },
          {
            name: "Estudio Estandar",
            //description: "",
            img: "../../../assets/img/habitaciones/D1_4.jpeg"
          },
          {
            name: "Estudio Estandar",
            //description: "",
            img: "../../../assets/img/habitaciones/D2_2.jpeg"
          },
          {
            name: "Estudio Estandar",
            //description: "",
            img: "../../../assets/img/habitaciones/D2_3.jpeg"
          },
          {
            name: "Estudio Estandar Doble",
            //description: "",
            img: "../../../assets/img/habitaciones/D3_2.jpeg"
          },
          {
            name: "Estudio Estandar Doble",
            //description: "",
            img: "../../../assets/img/habitaciones/D5_1.jpeg"
          },
          {
            name: "Estudio Estandar Doble",
            //description: "",
            img: "../../../assets/img/habitaciones/D5_4.jpeg"
          },
          {
            name: "Estudio Estandar",
            //description: "",
            img: "../../../assets/img/habitaciones/D7_1.jpeg"
          },
          {
            name: "Estudio Estandar",
            //description: "",
            img: "../../../assets/img/habitaciones/D7_3.jpeg"
          },
          {
            name: "Estudio Estandar",
            //description: "",
            img: "../../../assets/img/habitaciones/D7_4.jpeg"
          },
          {
            name: "Habitacion Doble sin Cocina",
            //description: "",
            img: "../../../assets/img/habitaciones/D8_1.jpeg"
          },
          {
            name: "Habitacion Doble sin Cocina",
            //description: "",
            img: "../../../assets/img/habitaciones/D8_2.jpeg"
          },
          {
            name: "Habitacion Doble sin Cocina",
            //description: "",
            img: "../../../assets/img/habitaciones/D8_3.jpeg"
          },
          {
            name: "Habitacion Sencilla sin Cocina",
            //description: "",
            img: "../../../assets/img/habitaciones/D9_1.jpeg"
          },
          {
            name: "Habitacion Sencilla sin Cocina",
            //description: "",
            img: "../../../assets/img/habitaciones/D9_2.jpeg"
          },
          {
            name: "Habitacion Sencilla sin Cocina",
            //description: "",
            img: "../../../assets/img/habitaciones/D9_3.jpeg"
          },
          {
            name: "Habitacion Sencilla sin Cocina",
            //description: "",
            img: "../../../assets/img/habitaciones/D10_1.jpeg"
          },
          {
            name: "Habitacion Doble con Cocina",
            //description: "",
            img: "../../../assets/img/habitaciones/D11_1.jpeg"
          },
          {
            name: "Habitacion Doble con Cocina",
            //description: "",
            img: "../../../assets/img/habitaciones/D11_2.jpeg"
          },
          {
            name: "Habitacion Doble con Cocina",
            //description: "",
            img: "../../../assets/img/habitaciones/D11_3.jpeg"
          }
    ];

    constructor(){}

    getRooms(): Room[]{
        return this.rooms;
    } 

}

export interface Room{
    name: string;
    //description: string;
    img: string;
}