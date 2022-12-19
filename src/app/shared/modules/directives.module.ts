import { NgModule } from '@angular/core';

import { NumericInputDirective } from '../directives/numeric-input.directive';

@NgModule({
  declarations: [NumericInputDirective],
  exports: [NumericInputDirective],
})
export class DirectivesModule {}
