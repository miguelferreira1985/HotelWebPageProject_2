import { Component, OnInit } from '@angular/core';
import { RoomTypeService, Room } from '../../services/roomType.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html'
})
export class RoomsComponent implements OnInit {

  roomType: Room[] = [];

  constructor(private _roomTypeService: RoomTypeService, private router: Router) { }

  ngOnInit() {
    this.roomType = this._roomTypeService.getRoomsType();
  }

  seeRoom( index: number ){
    this.router.navigate( ['/room', index] );
  }

}
