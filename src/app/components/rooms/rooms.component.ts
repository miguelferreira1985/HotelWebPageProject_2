import { Component, OnInit } from '@angular/core';
import { RoomsService, Room } from '../../services/rooms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html'
})
export class RoomsComponent implements OnInit {

  rooms: Room[] = [];

  constructor(private _roomsService: RoomsService, private router: Router) { }

  ngOnInit() {
    this.rooms = this._roomsService.getRooms();
  }

  seeRoom( index: number ){
    this.router.navigate( ['/room', index] );
  }

}
