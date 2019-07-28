import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
  
})
export class GalleryComponent implements OnInit {

  facilityImage: string = "../../../assets/img/exterior/ExteriorHotel.jpg";
  roomImage: string = "../../assets/img//tipoHabitaciones/HabitacionDoble_01.jpeg";

  constructor() { 


  }

  ngOnInit() {
  }

}
