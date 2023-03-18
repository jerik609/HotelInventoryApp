import { Component } from '@angular/core';
import { Room } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {

  // model with default values
  room: Room = {
    roomType: '',
    amenities: [],
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: [],
    price: 0
    // roomNumber is optional
  };

  successMessage: string = '';

  constructor(private roomService: RoomsService) {
  }

  addRoom() {
    this.roomService.addRoom(this.room).subscribe({
      next: data => (this.successMessage = 'Room Added Successfully: ' + JSON.stringify(data))
    })
  }

}
