import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { RoomTypeService} from '../../services/roomType.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  providers: [NgbCarouselConfig]
})
export class RoomComponent {

  room: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _roomsService: RoomTypeService, config: NgbCarouselConfig ) {

    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;

    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.room = this._roomsService.getRoomTypeById( params['id'] );
    });

   }



}
