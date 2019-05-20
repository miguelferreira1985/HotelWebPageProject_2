import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { RoomsService} from '../../services/rooms.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {

  room: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _roomsService: RoomsService ) {

      this.activatedRoute.params.subscribe( params => {
        console.log(params);
        this.room = this._roomsService.getRoomById( params['id'] );
      });

   }



}
