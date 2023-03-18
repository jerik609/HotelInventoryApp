import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookingComponent } from './rooms/booking/booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { RoomsComponent } from './rooms/rooms.component';

// order matters!
const routes: Routes = [
  { path:'employee', component: EmployeeComponent },
  { path:'rooms', component: RoomsComponent },
  { path:'rooms/add', component: RoomsAddComponent },
  { path:'rooms/:roomid', component: BookingComponent },
  { path:'login', component: LoginComponent },
  { path:'', redirectTo:'/login', pathMatch: 'full'},
  { path:'**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
