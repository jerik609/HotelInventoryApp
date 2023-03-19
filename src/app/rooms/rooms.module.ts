import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { BookingComponent } from './booking/booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { CustompipesModule } from '../custompipes/custompipes.module';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    BookingComponent,
    RoomsAddComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule,
    CustompipesModule
  ]
})
export class RoomsModule { }
