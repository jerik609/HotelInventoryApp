import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
      }),
      guests: this.formBuilder.array([
        this.formBuilder.group({
          name: new FormControl(''),
          email: [''],
          age: ['']
        })
      ])
    })
  }

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  addGuest() {
    console.log("Adding a guest");
    //let guests = this.bookingForm.get('guests') as FormArray;
    this.guests.push(
      this.formBuilder.group({
        name: new FormControl(''),
        email: [''],
        age: ['']
    }))
  }

  #hasPassport: boolean = false;
  togglePassport() {
    if (this.#hasPassport) {
      this.bookingForm.removeControl('passport');
      this.#hasPassport = false;
    } else {
      this.bookingForm.addControl('passport', new FormControl(''));
      this.#hasPassport = true;
    }
  }

  addBooking() { 
    console.log("The submitted form", this.bookingForm.getRawValue());
    console.log(this.bookingForm.get('address')?.getRawValue().addressLine)
  }

}
