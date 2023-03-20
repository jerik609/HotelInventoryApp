import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  
  bookingForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.bookingForm = this.formBuilder.group({
      roomId: [''],
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      guestAddress: [''],
      guestCity: [''],
      guestState: [''],
      guestCountry: [''],
      guestZipCode: new FormControl(''),
      guestCount: new FormControl(''),
      //guestList: Guest[];
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
