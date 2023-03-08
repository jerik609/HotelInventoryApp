import { Component, OnInit } from '@angular/core';
import { Room, Rooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit { // hey, there's ngOnInit here :-)

  boo: Boo;

  hotelName: string = 'Best Hotel';
  numberOfRooms: number;
  hideRooms: boolean = false;
  rooms?: Rooms;
  nullRooms?: Rooms;
  
  roomList: Room[] = [];

  selectedRoom?: Room;

  constructor() {
    this.boo = new Boo("oh no", "anyway");
    this.numberOfRooms = 100;
  }

  ngOnInit(): void {

    // just some data we can play with when learning directives (*ngIf)
    this.rooms = { 
      totalRooms: 20,
      availableRooms: 4,
      bookedRooms: 5
    }

    // data for *ngFor, we have data, let's bind it
    this.roomList = [{
      number: 1,
      type: 'Deluxe Room',
      amenities: ['Air Conditioning', 'Free WiFi'],
      photos: ['photos/1.jpg', 'photos/2.jpg', 'photos/3.jpg'],
      price: 100,
      checkinTime: new Date('11-November-2021'),
      checkoutTime: new Date('11-November-2021')
    },
    {
      number: 2,
      type: 'Standard Room',
      amenities: ['Air Conditioning', 'Free WiFi'],
      photos: ['photos/1.jpg', 'photos/2.jpg', 'photos/3'],
      price: 50,
      checkinTime: new Date('11-November-2021'),
      checkoutTime: new Date('11-November-2021')
    },
    {
      number: 3,
      type: 'Lowcost Room',
      amenities: ['Air Conditioning', 'Free WiFi'],
      photos: ['photos/1.jpg', 'photos/2.jpg', 'photos/3'],
      price: 20,
      checkinTime: new Date('11-November-2021'),
      checkoutTime: new Date('11-November-2021')
    }];

  }

  // a toggle function :-)
  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: Room): void {
    this.selectedRoom = room;
  }

  addRoom() {
    const newRoom: Room = {
      number: this.roomList.length + 1,
      type: 'Standard Room',
      amenities: ['Chocolate Fountain', 'Free Beer'],
      photos: ['photos/1.jpg', 'photos/2.jpg', 'photos/3'],
      price: 1500,
      checkinTime: new Date('11-November-2021'),
      checkoutTime: new Date('11-November-2021')
    };
    this.roomList.push(newRoom);
  };

}

class Boo {
  hoo: String;
  foo: String;
  
  constructor(hoo: String, foo: String) {
    this.hoo = hoo;
    this.foo = foo;
  }
}
