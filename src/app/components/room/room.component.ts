import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { RoomTypeService} from '../../services/roomType.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html'
})
export class RoomComponent {

  room: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _roomsService: RoomTypeService ) {

      this.activatedRoute.params.subscribe( params => {
        console.log(params);
        this.room = this._roomsService.getRoomTypeById( params['id'] );
      });

   }



}
