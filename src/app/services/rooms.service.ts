import { Injectable } from '@angular/core';


@Injectable()
export class RoomsService{

    private rooms:Room [] = [
        {
            id: 1,
            name: "Estudio Estandar Sencillo",
            bedNumber: "1",
            maxPax: "2",
            price: "850",
            description: "Habitacion en planta alta, equipada con cocina y todos los utensilios necesarios para hacer uso de a misma, barra desayunadora, cuenta ademas con aire acondicionado," +
                         " television con cable una cama Queen size o King size (preguntar por disponibilidad), baño con agua caliente e internet inalambrico.",
            image: ["../../assets/img//habitaciones/EstudioEstandar_0.jpg",""]
        },
        {
            id: 2,
            name: "Estudio Estandar Doble",
            bedNumber: "2",
            maxPax: "4",
            price: "850",
            description: "Habitacion en planta alta, equipada con cocina y todos los utensilios necesarios para hacer uso de a misma, barra desayunadora, cuenta ademas con aire acondicionado," +
                         " television con cable una cama matrimonial y una individual, baño con agua caliente e internet inalambrico.",
            image: ["../../assets/img//habitaciones/EstudioEstandarDoble_0.jpg",""]
        },
        {
            id: 3,
            name: " Sencilla",
            bedNumber: "1",
            maxPax: "2",
            price: "750",
            description: "Habitacion en planta baja, equipada refrigerador, terraza con vista hacia la piscina y el jardin, cuenta ademas con aire acondicionado," +
            " television con cable una cama King size, baño con agua caliente e internet inalambrico.",
            image: ["../../assets/img//habitaciones/Sencilla_0.jpeg",""]
        },
        {
            id: 3,
            name: "Doble",
            bedNumber: "2",
            maxPax: "5",
            price: "750",
            description: "Habitacion en planta baja, equipada refrigerador, terraza con vista hacia la piscina y el jardin, cuenta ademas con aire acondicionado," +
            " television con cable una cama matrimonial y una individual, baño con agua caliente e internet inalambrico.",
            image: ["../../assets/img//habitaciones/Doble_0.jpeg",""]
        },
        {
            id: 4,
            name: "Doble con Cocina",
            bedNumber: "2",
            maxPax: "4",
            price: "750",
            description: "Habitacion en planta alta, equipada con cocina y todos los utensilios necesarios para hacer uso de a misma, barra desayunadora, cuenta ademas con aire acondicionado," +
            " television con cable una cama matrimonial y una individual, baño con agua caliente e internet inalambrico.",
            image: ["../../assets/img//habitaciones/DobleCocina_0.jpeg",""]
        },
        {
            id: 5,
            name: "Casita Nicte-Ha",
            bedNumber: "2",
            maxPax: "6",
            price: "1500",
            description: "Consta de cocina totalmente equipada, sala, comedor y 2 recamaras cada una con una cama King size, aire acondicionado en las 2 recamaras que climatizan," +
                         " toda la estancia, una television con cable para cada habitacion, internet inalambrico, una de las recamaras cuenta con excelente vista al jardin y a la piscina.",
            image: ["../../assets/img//habitaciones/Casita_0.jpg",""]
        }
    ];

    constructor() {}

    getRooms(): Room[]{
        return this.rooms;
    }

    getRoomById( id: string ){
        return this.rooms[id];
    }

}


export interface Room{
    id?: number;
    name: string;
    bedNumber: string;
    maxPax: string;
    price: string;
    description: string;
    image: string[];
}