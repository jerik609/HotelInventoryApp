import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

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
      termsAndConditions: new FormControl(false, { validators: Validators.requiredTrue }), //[false, [Validators.requiredTrue]],
      roomId: new FormControl({ value: '2', disabled: true}, { validators: [Validators.required]}), //[''],
      guestEmail: ['', [Validators.required, Validators.email]],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: ['', [Validators.required, Validators.minLength(5)]],
      guestName: [''],
      address: this.formBuilder.group({
        addressLine: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
      }),
      guests: this.formBuilder.array([
        this.getNewGuestGroup()
      ])
    })
  }

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  private getNewGuestGroup(): FormGroup {
    return this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: [''],
      age: ['']
    })
  }

  addGuest() {
    console.log("Adding a guest");
    //let guests = this.bookingForm.get('guests') as FormArray;
    this.guests.push(this.getNewGuestGroup());
  }

  removeGuest(id: number) {
    this.guests.removeAt(id);
  }

  #hasPassport: boolean = false;
  togglePassport() {
    if (this.#hasPassport) {
      this.bookingForm.removeControl('passport');
      this.#hasPassport = false;
    } else {
      this.bookingForm.addControl('passport', new FormControl('', [Validators.required]));
      this.#hasPassport = true;
    }
  }

  addBooking() { 
    console.log("The submitted form", this.bookingForm.getRawValue());
    console.log(this.bookingForm.get('address')?.getRawValue().addressLine)
    this.bookingForm.reset({
      roomId: '2',
      guestEmail: 'blah@blahblah.sk',
      guests: [{
        name: "moo"
      }],
      address: {
        city: "testcity"
      },
      termsAndConditions: false
  })

  }

}
