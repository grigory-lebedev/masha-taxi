import { Directive, ElementRef, HostListener } from '@angular/core';

import { regExpressionToCheckNumericInput } from 'src/app/shared/constants';

@Directive({
  selector: '[numericInput]',
})
export class NumericInputDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('input') 
  onInputChange() {
    const initialValue = this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value = initialValue.replace(regExpressionToCheckNumericInput, '');
  }
}
