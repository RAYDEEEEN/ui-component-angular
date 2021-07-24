import { NgModule } from '@angular/core';
import { NumericValueAccessor } from './directives/number-value-accessor';
import { MyInput } from './directives/proxies';
import { TextValueAccessor } from './directives/text-value-accessor';
import { ValueAccessor } from './directives/value-accessor';

const COMPONENTS = [
  MyInput,
  NumericValueAccessor,
  ValueAccessor,
  TextValueAccessor
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class UiComponentAngularModule {}
