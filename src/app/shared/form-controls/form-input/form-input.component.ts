import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() InputForm!: FormGroup;
  @Input() type: string = '';
  @Input() placeholder: string = '';
  
  hide: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
