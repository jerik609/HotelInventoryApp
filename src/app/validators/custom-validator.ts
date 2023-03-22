import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidator {

    static validateName(control: AbstractControl) {
        const value = control.value as string;
        console.log('validating guest email');
        if (value.includes('test')) {
            return {
                invalidName: true
            }
        }
        return null;
    }

    // we want to restrict special characters - we will return a validation function :-)
    static validateSpecialChar(character: string) {
        return (control: AbstractControl) => {
            const value = control.value as string;
            if (value.includes(character)) {
                return {
                    invalidSpecialCharacter: true
                };
            }
            return null;
        }
    }

    // per form validation - we want to validate that e.g. "before date" is indeed before "after data"
    static validateDates(bribe: string) {
        
        return (group: FormGroup) => {
            const checkinDate = group.get('checkinDate')?.value;
            const checkoutDate = group.get('checkoutDate')?.value;
            console.log("In:", checkinDate, "\nOut:", checkoutDate);
            
            if (checkinDate === null || checkoutDate === null || checkinDate > checkoutDate) {
                return {
                    invalidCheckinCheckoutDates: `${bribe}`
                };
            }
            return null;
        }
    }

    static validateDatesNoParam(group: FormGroup) {
        const checkinDate = group.get('checkinDate')?.value;
        const checkoutDate = group.get('checkoutDate')?.value;
        console.log("In:", checkinDate, "\nOut:", checkoutDate);

        if (checkinDate === null || checkoutDate === null || checkinDate > checkoutDate) {
            group.get('checkinDate')?.setErrors({
                invalidCheckinDate: true
            });
            group.get('checkoutDate')?.setErrors({
                invalidCheckoutDate: true
            });
            return {
                invalidCheckinCheckoutDatesWithNoParams: true
            };
        }
        return null;
    }
}
