import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  
  bookingForm!: FormGroup;
  
  bookingForm2!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.bookingForm2 = this.formBuilder.group({
      dadaEmail: [''],
    })

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
      address: this.formBuilder.group({
        addressLine: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        //zipCode: new FormControl({ value: '2', disabled: true })
      }),
      guestCount: new FormControl('')
      //guestList: Guest[];
    })
  }

  addBooking() { 
    console.log("The submitted form", this.bookingForm.getRawValue());
    console.log(this.bookingForm.get('address')?.getRawValue().addressLine)
  }

}
