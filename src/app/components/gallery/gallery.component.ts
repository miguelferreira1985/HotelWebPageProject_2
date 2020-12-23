import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {

  facilityImage = '../../../assets/img/exterior/ExteriorHotel.jpg';
  roomImage = '../../assets/img//tipoHabitaciones/HabitacionDoble_01.jpeg';

  constructor() {
  }

  ngOnInit() {
  }

}
