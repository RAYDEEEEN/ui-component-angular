import { NgModule } from '@angular/core';
import { NumericValueAccessor } from './directives/number-value-accessor';
import { MyInput } from './directives/proxies';
import { TextValueAccessor } from './directives/text-value-accessor';

const COMPONENTS = [MyInput, NumericValueAccessor, TextValueAccessor];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class UiComponentAngularModule {}
