import { AppConfig } from './../../app-config/appconfig.interface';
import { APP_SERVICE_CONFIG } from './../../app-config/appconfig.service';
import { Inject, Injectable } from '@angular/core';
import { Room } from '../rooms';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
//import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  //theRooms!: Room[];


  // let's use observables as attributes:
  getRooms$ = this.httpClient.get<Room[]>('/api/rooms').pipe(
    shareReplay()
  );

  setRooms(rooms: Room[]) {
    //this.theRooms = rooms;
    console.log("rooms set to: " + rooms);
  }

  // getRooms(): Observable<Room[]> {
  //   console.log("RoomsService: getRooms");
  //   //return this.theRooms;
  //   return this.httpClient.get<Room[]>("/api/rooms");
  // }

  addRoom(room: Room): Observable<Room> {
    console.log("Adding a room: " + room);
    return this.httpClient.post<Room>('/api/rooms', room);
  }

  updateRoom(room: Room): Observable<Room> {
    console.log("Updating a room: " + room)
    return this.httpClient.put<Room>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(roomNumber: number): Observable<Room> {
    return this.httpClient.delete<Room>(`/api/room/${roomNumber}`);
  }

  // request api - reading from an API with a lot of data
  getPhotos(): Observable<HttpEvent<unknown>> {
    const request = new HttpRequest(
      'GET', 
      'https://jsonplaceholder.typicode.com/photos',
      { 
        reportProgress: true
      }
    );
    return this.httpClient.request(request);
  }

  constructor(@Inject(APP_SERVICE_CONFIG) private appConfig: AppConfig, private httpClient: HttpClient) {
    console.log("My API endpoint via value provider: " + appConfig.apiEndpoint);
    //console.log("The API endpoint!: " + environment.apiEndpoint);
    console.log("RoomsService: constructor");
    this.initializeMe();
  }

  initializeMe() {
    console.log("RoomsService: initializeMe")

    // this.theRooms = [{
    //   number: 1,
    //   type: 'Deluxe Room',
    //   amenities: ['Air Conditioning', 'Free WiFi'],
    //   photos: ['photos/1.jpg', 'photos/2.jpg', 'photos/3.jpg'],
    //   price: 100,
    //   checkinTime: new Date('11-November-2021'),
    //   checkoutTime: new Date('11-November-2021')
    // },
    // {
    //   number: 2,
    //   type: 'Standard Room',
    //   amenities: ['Air Conditioning', 'Free WiFi'],
    //   photos: ['photos/1.jpg', 'photos/2.jpg', 'photos/3'],
    //   price: 50,
    //   checkinTime: new Date('11-November-2021'),
    //   checkoutTime: new Date('11-November-2021')
    // },
    // {
    //   number: 3,
    //   type: 'Lowcost Room',
    //   amenities: ['Air Conditioning', 'Free WiFi'],
    //   photos: ['photos/1.jpg', 'photos/2.jpg', 'photos/3'],
    //   price: 20,
    //   checkinTime: new Date('11-November-2021'),
    //   checkoutTime: new Date('11-November-2021')
    // }];

  }

}
