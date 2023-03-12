import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Room, Rooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  boo: Boo;

  hotelName: string = 'Best Hotel';
  numberOfRooms: number;
  hideRooms: boolean = false;
  rooms?: Rooms;
  nullRooms?: Rooms;

  roomList: Room[] = [];

  title: string = 'Room List';

  selectedRoom?: Room;

  // viewchild example

  @ViewChild(HeaderComponent, { static: false }) headerComponent?: HeaderComponent;

  // for view children, static is false and cannot be set to true
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  ngAfterViewInit(): void {
    this.headerComponent!.title = "Rooms View";

    console.log(this.headerChildrenComponent);

    this.headerChildrenComponent?.forEach(element =>
      element.title = "modified title value using @ViewChildren");

    this.headerChildrenComponent.last.title = "The very last title";
  }

  ngAfterViewChecked(): void {
    // triggered after one check ahs been performed - not used that much (only once)
    this.headerComponent!.title = "one time trigger actions";
  }

  constructor() {
    this.boo = new Boo("oh no", "anyway");
    this.numberOfRooms = 100;
  }

  ngDoCheck(): void {
    console.log("do check is called");
  }

  ngOnInit(): void {

    //console.log("Header component, where are thou? " + this.headerComponent);

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
    this.title = "Changed the value to something else";
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

    this.roomList = [...this.roomList, newRoom];
    // "push" will not work in OnPush mode, because OnPush does not register changes if reference does not change
    // in contrast to the Default mode, which checks the data, but it's less efficient due to that
    //this.roomList.push(newRoom);
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
