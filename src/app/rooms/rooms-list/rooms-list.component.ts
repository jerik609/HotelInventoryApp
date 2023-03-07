import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {

  constructor() { }

  // this is where we will receive our rooms data
  // here we will get the data
  // when I add @Input, which states that: 
  // make this rooms property a valid HTML property on this HTML element (app-rooms-list)
  // this property rooms becomes a property on top of this HTML tag
  // I guess we can then pass the data into it
  @Input() rooms: Room[] = []

  // now since this component is a child component and it's supposed to be a little dumb,
  // it does not know how to do things on its own
  // so it needs to pass data back to the parent component
  // so for example, when the used clicks on a room, we will pass this information to the parent component
  @Output() clickedRoom = new EventEmitter<Room>();

  selectRoom(room: Room) {
    this.clickedRoom.emit(room);
  }

}
