import { Directive, HostListener } from '@angular/core';

import { regExpressionToCheckNumericInput } from 'src/app/shared/constants';

@Directive({
  selector: '[numericInput]',
})
export class NumericInputDirective {
  @HostListener('keypress', ['$event']) 
  keyPress(event: KeyboardEvent) {
    if(event.key.match(regExpressionToCheckNumericInput)) {
      event.preventDefault();
    }
  }
}
