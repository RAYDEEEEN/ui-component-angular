import { NgModule } from '@angular/core';
import { MyInput } from './directives/proxies';

const COMPONENTS = [MyInput];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class UiComponentAngularModule {}
