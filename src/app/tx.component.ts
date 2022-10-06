import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'tx-root',
  templateUrl: './tx.component.html',
  styleUrls: ['./tx.component.scss'],
})
export class AppComponent {
  title = 'masha-taxi';

  public demonstrationForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    isLoggedIn: new FormControl(false),
  });

  onSignIn(): void {
    console.log(this.demonstrationForm.controls['email'].value);
    console.log(this.demonstrationForm.controls['password'].value);
    console.log(this.demonstrationForm.controls['name'].value);
    console.log(this.demonstrationForm.controls['isLoggedIn'].value);
  }
}
