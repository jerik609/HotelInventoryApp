import { Component, Optional, Self, AfterViewInit } from '@angular/core';
import { NotProvidedService } from '../common-services//not-provided.service';
import { CommonsService } from '../common-services/commons.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [CommonsService]
})
export class EmployeeComponent implements AfterViewInit {

  employeeName: string = "John";

  constructor(
    @Self() private commonsService: CommonsService,
    @Optional() private notProvided: NotProvidedService
  ) {
  }

  ngAfterViewInit(): void {
    console.log(this.notProvided == undefined ? "not-provided is undefined" : this.notProvided.hello);
  }

}
