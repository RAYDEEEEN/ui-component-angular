import { NgModule } from '@angular/core';
import { defineCustomElements } from '@raydeeeen/ui-component/loader';
import { NumericValueAccessor } from './directives/number-value-accessor';
import { UiInput } from './directives/proxies';
import { TextValueAccessor } from './directives/text-value-accessor';

const COMPONENTS = [UiInput, NumericValueAccessor, TextValueAccessor];

defineCustomElements(window);

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class UiComponentAngularModule {}
