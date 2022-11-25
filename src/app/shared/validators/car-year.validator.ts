import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CarYearValidator {
  static getCarYearError(): ValidatorFn {
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
}