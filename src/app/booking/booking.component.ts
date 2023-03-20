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
  }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      roomId: new FormControl({ value: '2', disabled: true}), //[''],
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

  addBooking() { 
    console.log("The submitted form", this.bookingForm.getRawValue());
  }

}
