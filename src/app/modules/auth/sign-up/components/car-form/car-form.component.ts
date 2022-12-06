import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

import { carColors } from 'src/app/shared/constants';
import { CarYearValidator } from 'src/app/shared/validators/car-year.validator';

@Component({
  selector: 'tx-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss'],
})
export class CarFormComponent implements OnInit {
  public parentForm!: FormGroup;
  public carForm!: FormGroup;
  public selectColors = carColors;

  constructor(private parent: FormGroupDirective) {}

  ngOnInit(): void {
    this.parentForm = this.parent.form;
    this.initCarForm();
    this.parentForm.addControl('carInfo', this.carForm);
  }

  private initCarForm(): void {
    this.carForm = new FormGroup({
      make: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
      ]),
      model: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
      ]),
      year: new FormControl('', [
        Validators.required,
        CarYearValidator.getCarYearError(),
      ]),
      color: new FormControl('', Validators.required),
    });
  }
}
