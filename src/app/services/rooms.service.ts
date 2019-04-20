import { Injectable } from '@angular/core';

@Injectable()
export class RoomsService{

    private rooms:Room [] = [
        {
            name: "Estudio Estandar Sencillo",
            bedNumber: "1",
            maxPax: "2",
            price: "850"
        },
        {
            name: "Estudio Estandar Doble",
            bedNumber: "2",
            maxPax: "4",
            price: "850"
        },
        {
            name: " Sencilla",
            bedNumber: "1",
            maxPax: "2",
            price: "750"
        },
        {
            name: "Doble",
            bedNumber: "1",
            maxPax: "3",
            price: "850"
        },
        {
            name: "Casita",
            bedNumber: "2",
            maxPax: "6",
            price: "1500"
        }
    ];

    constructor() {}

}

export interface Room{
    name: string;
    bedNumber: string;
    maxPax: string;
    price: string;
}