import { Injectable } from '@angular/core';
import { Room } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  getRooms(): Room[] {
    return [{
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


  constructor() { }
}
