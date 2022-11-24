import { AbstractControl } from '@angular/forms';

export function setErrorValidationMessage(control: AbstractControl, placeholder: string): string {
  if (control.hasError('required')) {
    return `${placeholder} is a required field!`;
  }
  if (control.hasError('email')) {
    return `${placeholder} isn't valid!`;
  }
  if (control.hasError('maxlength')) {
    let requiredLength = control.errors?.['maxlength'].requiredLength;
    return `${placeholder} should be less than ${requiredLength} symbols!`;
  }
  if (control.hasError('carYearLimit')) {
    return `${placeholder} is out of possible values!`;
  }
  if (control.hasError('noPasswordMatch')) {
    return `${placeholder} doesn't match with Password!`;
  }
  return '';
}
