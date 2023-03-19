import { AfterContentInit, Component, ContentChild, Host } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { CommonsService } from '../common-services/commons.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'], //,
  providers: [CommonsService]
})
export class ContainerComponent implements AfterContentInit {

  @ContentChild(EmployeeComponent) employeeComponent!: EmployeeComponent;

  constructor(@Host() private commonsService: CommonsService) {
  }

  ngAfterContentInit(): void {
    console.log("SETTING JUST ONE ROOM IN SPECIAL ROOMS")
    this.employeeComponent.employeeName = "THE BIG " + this.employeeComponent.employeeName;
    // this.roomsService.setRooms([{
    //   number: 1,
    //   type: 'Special Safety Room',
    //   amenities: ['Air Conditioning', 'Free WiFi', 'AK-47'],
    //   photos: ['photos/1.jpg', 'photos/2.jpg', 'photos/3'],
    //   price: 200000,
    //   checkinTime: new Date('11-November-2022'),
    //   checkoutTime: new Date('11-November-2022')
    // }]);
  }
}
