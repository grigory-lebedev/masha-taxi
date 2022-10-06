import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tx-root',
  templateUrl: './tx.component.html',
  styleUrls: ['./tx.component.scss'],
})
export class AppComponent {
  title = 'masha-taxi';
  selectItems = [
    { id: 1, value: 'Client' },
    { id: 2, value: 'Driver' },
  ];

  public demonstrationForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl({value: '', disabled: false}, Validators.required),
    name: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    isLoggedIn: new FormControl(false),
    button: new FormControl({value: '', disabled: true}),
  });

  isFormInvalid(): boolean{
    return !this.demonstrationForm.valid;
  }

  onSignIn(): void {
    console.log((this.demonstrationForm.controls)['password']);
    if (this.isFormInvalid()) {
      return;
    }
  }
}
