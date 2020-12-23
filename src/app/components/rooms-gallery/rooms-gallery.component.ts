import { Component, OnInit } from '@angular/core';
import { RoomsService, Room } from '../../services/rooms.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rooms-gallery',
  templateUrl: './rooms-gallery.component.html',
  providers: [NgbCarouselConfig]
})
export class RoomsGalleryComponent implements OnInit {

  rooms: Room[] = [];

  constructor(private roomsService: RoomsService, config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;

   }

  ngOnInit() {

    this.rooms = this.roomsService.getRooms();

  }

}
