import { RoomsService } from './services/rooms.service';
import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, Rooms } from './rooms';
import { Observable, Subscription } from 'rxjs';
import { HttpEventType, HttpHeaderResponse } from '@angular/common/http';
import { ConfigService } from '../common-services/config.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class RoomsComponent implements OnDestroy, OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  boo!: Boo;

  hotelName: string = 'Best Hotel';
  numberOfRooms!: number;
  hideRooms: boolean = false;
  hideRoomList: boolean = false;
  rooms?: Rooms;
  nullRooms?: Rooms;

  roomList!: Room[];

  title: string = 'Room List';

  selectedRoom?: Room;

  data: Observable<string> = new Observable<string>(
    subscriber => {
      subscriber.next('Hello');
      subscriber.next(',');
      subscriber.next('World');
      subscriber.next('!');
      subscriber.complete();
    }
  );

  // https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit
  /*
  Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the
  constructor. The constructor should only be used to initialize class members but shouldn't do
  actual "work".
  */
  constructor(private roomsService: RoomsService,
    private config: ConfigService
    ) {
      console.log("The title: ", config.getTitle());
  }

  ngOnInit(): void {
    //console.log("Header component, where are thou? " + this.headerComponent);

    this.data.subscribe({
      next: data => console.log(data),
      error: error => console.log(error.message),
      complete: () => console.log("I'm done here!")
    });

    this.boo = new Boo("oh no", "anyway");
    this.numberOfRooms = 100;
    
    //this.getRooms();

    // just some data we can play with when learning directives (*ngIf)
    this.rooms = {
      totalRooms: 20,
      availableRooms: 4,
      bookedRooms: 5
    }
  }

  subscription!: Subscription;

  getRooms$: Observable<Room[]> = this.roomsService.getRooms$;
  getErrors$: Observable<string> = this.roomsService.getErrors$;
  getRoomCount$: Observable<number> = this.roomsService.roomCount$;

  // getRooms(): void {
  //   this.subscription = this.roomsService.getRooms$.subscribe({
  //     next: (rooms) => this.roomList = rooms,
  //     error: (error) => console.log(error.message),
  //     complete: () => console.log("done reading the rooms list!")
  //   })
  // }

  ngOnDestroy(): void {
    console.log("DESTROY ALL HUMANS!!!");
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }

  // addRoom(): void {
  //   const newRoom: Room = {
  //     //number: `${this.roomList.length + 1}`,
  //     roomType: 'Standard Room',
  //     amenities: ['Chocolate Fountain', 'Free Beer'],
  //     photos: ['photos/1.jpg', 'photos/2.jpg', 'photos/3'],
  //     price: 1500,
  //     checkinTime: new Date('11-November-2021'),
  //     checkoutTime: new Date('11-November-2021')
  //   };

  //   this.roomsService.addRoom(newRoom).subscribe({
  //     // due to making sure OnPush mode can function, we should not update existing references,
  //     // but replace them with new ones, so that changes are picked up by change detection
  //     // i.e. this.roomList.push(room) would work data-wise, but not display wise
  //     next: (room) => {
  //       console.log("Adding room: ", room);
  //       this.roomList = [...this.roomList, room];
  //     },
  //     error: (error) => console.log(error.message),
  //     complete: () => console.log("done reading the rooms list!")
  //   })
  // }

  editRoom(): void {
    const newRoom: Room = {
      roomNumber: '3',
      roomType: 'Super Dooper Fancy Room',
      amenities: ['Challenger 2 Simulator', 'Free Beer'],
      photos: ['photos/challenger.jpg', 'photos/2.jpg', 'photos/3'],
      price: 99999,
      checkinTime: new Date('11-November-2023'),
      checkoutTime: new Date('11-November-2023')
    };

    this.roomsService.updateRoom(newRoom).subscribe({
      next: (room) => {
        console.log("Updated room: ", room);
        let filtered = this.roomList.filter(x => x.roomNumber !== room.roomNumber);
        this.roomList = [...filtered, room];
      },
      error: (error) => console.log(error.message),
      complete: () => console.log("done reading the update room list!")
    })
  }

  deleteRoom(): void {
    this.roomsService.deleteRoom(3);
  }

  totalBytes: number = 0;

  getPhotos(): void {
    console.log("USER CLICKED ON GET PHOTOS!");
    this.roomsService.getPhotos().subscribe({
      next: event => {
        console.log(event);
        switch(event.type) {
          case HttpEventType.Sent:
            console.log("Request has been made!");
            break;
          case HttpEventType.ResponseHeader:
            console.log("Request success!");
            this.totalBytes = 0;
            break;
          case HttpEventType.DownloadProgress:
            this.totalBytes += event.loaded;
            console.log("Transferred so far: " + this.totalBytes);
            console.log("Total bytes to transfer: " + (event.total ?? "unknown for this request"));
            break;
          case HttpEventType.Response:
            console.log("Request complete!");
            console.log("the data: " + event.body);
            break;
          default: 
            console.log("unexpected value: " + event.type);
        }
      },
      error: error => console.log(error.message),
      complete: () => console.log("done reading, observable sent complete!")
    });
  }

  // viewchild example
  @ViewChild(HeaderComponent, { static: false }) headerComponent?: HeaderComponent;

  // for view children, static is false and cannot be set to true
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  ngAfterViewInit(): void {
    //this.headerComponent!.title = "Rooms View";

    console.log(this.headerChildrenComponent);

    this.headerChildrenComponent?.forEach(element =>
      element.title = "modified title value using @ViewChildren");

    //this.headerChildrenComponent.last.title = "The very last title";
  }

  ngAfterViewChecked(): void {
    // triggered after one check ahs been performed - not used that much (only once)
    //this.headerComponent!.title = "one time trigger actions";
  }

  ngDoCheck(): void {
    console.log("do check is called");
  }

  // a toggle function :-)
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Changed the value to something else";
  }

  toggleRoomList() {
    //this.getRooms();
    this.hideRoomList = !this.hideRoomList;
  }

  selectRoom(room: Room): void {
    this.selectedRoom = room;
  }

}

class Boo {
  hoo: String;
  foo: String;

  constructor(hoo: String, foo: String) {
    this.hoo = hoo;
    this.foo = foo;
  }
}
