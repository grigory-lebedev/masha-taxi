import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidator {
  static yearLimitValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value !== null) {
        return isNaN(control.value) ||
          !Number.isInteger(+control.value) ||
          control.value < 1800 ||
          control.value > new Date().getFullYear()
          ? { carYearLimit: true }
          : null;
      }
      return null;
    };
  }

  static passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password: string = control?.get('password')?.value; 
    const confirmPassword: string = control?.get('confirmPassword')?.value; 

    if (password !== confirmPassword) {
      control?.get('confirmPassword')?.setErrors({ noPasswordMatch: true });
    }
    return null;
  }
}
