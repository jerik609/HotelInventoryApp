import { RoomsService } from './../rooms/services/rooms.service';
import { Component, Optional, Self, AfterViewInit } from '@angular/core';
import { NotProvidedService } from '../rooms/services/not-provided.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService]
})
export class EmployeeComponent implements AfterViewInit {

  employeeName: string = "John";

  constructor(
    @Self() private roomsService: RoomsService,
    @Optional() private notProvided: NotProvidedService
  ) {
  }

  ngAfterViewInit(): void {
    console.log(this.notProvided == undefined ? "not-provided is undefined" : this.notProvided.hello);
  }

}
