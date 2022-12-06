import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordMatchValidator {
  static getPasswordMatchError(control: AbstractControl): ValidationErrors | null {
    const password: string = control?.get('password')?.value; 
    const confirmPassword: string = control?.get('confirmPassword')?.value; 

    if (password !== confirmPassword) {
      control?.get('confirmPassword')?.setErrors({ noPasswordMatch: true });
    }
    
    return null;
  }
}