import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  addRoom(form: NgForm) {
    this.roomService.addRoom(this.room).subscribe({
      next: data => {
        (this.successMessage = 'Room Added Successfully: ' + JSON.stringify(data))
        form.resetForm({
          amenities: "Cookie Dispenser Machine (TM)",
          price: "9999123"
        });
      }
    })
  }

}
