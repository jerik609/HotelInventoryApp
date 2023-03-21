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
      guestEmail: [
        '', 
        { 
          updateOn:'blur', 
          validators: [Validators.required, Validators.minLength(5)]
        }
      ],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [
        '', 
        { 
          updateOn:'blur'
        }
      ],
      guestName: [''],
      address: this.formBuilder.group({
        addressLine: [''],
        addressLine2: [''],
        city: ['', [Validators.required]],
        state: [''],
        country: [''],
      }),
      guests: this.formBuilder.array([
        this.getNewGuestGroup()
      ])
    }, { updateOn: 'blur' })

    this.getBookingData();

    this.bookingForm.valueChanges.subscribe({
      next: change => console.log("Registered form value change: ", change)
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

  // mocking function to test setValue and patchValue, "as if the data were comming from some backend"
  getBookingData() {
    this.bookingForm.patchValue({//setValue({
      termsAndConditions: new FormControl(false, { validators: Validators.requiredTrue }), //[false, [Validators.requiredTrue]],
      roomId: '2',
      guestEmail: 'test@gmail.com',
      checkinDate: new Date('10-Feb-2020'),
      checkoutDate: new Date('10-Feb-2020'),
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: ['', [Validators.required, Validators.minLength(5)]],
      guestName: [''],
      address: {
        addressLine: "hello",
        addressLine2: "you",
        city: "some place",
        state: "state",
        country: "country"
      },
      guests: [{
        //name: "me",
        email: "h@h.h",
        age: 10
      }]
    })
  }

}
