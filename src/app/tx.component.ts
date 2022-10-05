import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'tx-root',
  templateUrl: './tx.component.html',
  styleUrls: ['./tx.component.scss'],
})
export class AppComponent {
  title = 'masha-taxi';

  public demonstrationForm: FormGroup = new FormGroup({
    email: new FormControl({ value: '', disabled: false }, 
    //[Validators.required, Validators.email]
    ),
    password: new FormControl({ value: '', disabled: false }, 
    //[Validators.required]
    ),
    name: new FormControl({ value: '', disabled: false }, 
    //[Validators.required]
    ),
  });

  onSignIn(): void {
    console.log(this.demonstrationForm.controls['email']);
  }
}
