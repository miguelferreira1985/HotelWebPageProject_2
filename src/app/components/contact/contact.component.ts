import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {



  title: string = 'My first AGM project';
  lat: number = 21.2846879;
  lng: number = -89.66718370000001;
  zoomHotel: number = 17;

  constructor() { }

  ngOnInit() {

  }

}
