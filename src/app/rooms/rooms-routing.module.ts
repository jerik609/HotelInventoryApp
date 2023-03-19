import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  { 
    path:'rooms',
    component: RoomsComponent,
    children: [
      { path:'add', component: RoomsAddComponent },
      // this matches anything, so it has to be below the more specific cases
      { path:':roomid', component: BookingComponent }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
