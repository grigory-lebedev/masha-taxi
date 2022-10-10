import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tx-root',
  templateUrl: './tx.component.html',
  styleUrls: ['./tx.component.scss'],
})
export class AppComponent {
  public title = 'masha-taxi';

  public isChecked: boolean = false;

  public itemsPerPagesList = [
    { value: '10', isChosen: true },
    { value: '20', isChosen: false },
    { value: '50', isChosen: false },
  ];

  public demonstrationForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl({ value: '', disabled: false }, Validators.required),
    name: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    isLoggedIn: new FormControl({ value: this.isChecked, disabled: false }),
  });

  public onSignIn(): void {
    console.log(this.demonstrationForm.controls['isLoggedIn']);
    if (!this.demonstrationForm.valid) {
      return;
    }
  }

  public onChangeEvent(event: any) {
    this.isChecked = !this.isChecked;
  }
}
