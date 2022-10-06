import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'tx-root',
  templateUrl: './tx.component.html',
  styleUrls: ['./tx.component.scss'],
})
export class AppComponent {
  title = 'masha-taxi';
  selectItems = [
    { id: 1, value: 'Client' },
    { id: 2, value: 'Driver' }
  ];

  public demonstrationForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    role: new FormControl(''),
    isLoggedIn: new FormControl(false),
  });

  onSignIn(): void {
    console.log(this.demonstrationForm.controls['role'].value);
  }
}
