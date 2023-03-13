import { Injectable } from '@angular/core';
import { Room } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  theRooms!: Room[];

  setRooms(rooms: Room[]) {
    this.theRooms = rooms;
  }

  getRooms(): Room[] {
    console.log("RoomsService: getRooms")
    return this.theRooms;
  }

  constructor() {
    console.log("RoomsService: constructor");
    this.initializeMe();
  }

  initializeMe() {
    console.log("RoomsService: initializeMe")

    this.theRooms = [{
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

}
