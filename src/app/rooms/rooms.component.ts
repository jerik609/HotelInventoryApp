import { Component, OnInit } from '@angular/core';
import { Room, Rooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName: string = 'Best Hotel';
  numberOfRooms: number;
  boo: Boo;

  constructor() {
    this.boo = new Boo("oh", "no");
    this.numberOfRooms = 100;
  }

  ngOnInit(): void {
  }

  hideRooms: boolean = false;
  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  // just some data we can play with when learning directives (*ngIf)
  rooms?: Rooms = {
    totalRooms: 20,
    availableRooms: 4,
    bookedRooms: 5
  }

  nullRooms?: Rooms = {
  }

  // data for *ngFor, we have data, let's bind it
  roomList: Room[] = [{
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

class Boo {
  hoo: String;
  foo: String;
  
  constructor(hoo: String, foo: String) {
    this.hoo = hoo;
    this.foo = foo;
  }
}
