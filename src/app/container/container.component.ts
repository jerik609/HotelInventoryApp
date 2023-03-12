import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterContentInit {

  @ContentChild(EmployeeComponent) employeeComponent!: EmployeeComponent;

  ngAfterContentInit(): void {
    this.employeeComponent.employeeName = "THE BIG " + this.employeeComponent.employeeName;
  }
}
