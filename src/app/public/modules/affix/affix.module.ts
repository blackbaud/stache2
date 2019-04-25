import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  StacheAffixComponent
} from './affix.component';

import {
  StacheAffixTopDirective
} from './affix-top.directive';

import {
  StacheSharedModule
} from '../shared/shared.module';

@NgModule({
  declarations: [
    StacheAffixComponent,
    StacheAffixTopDirective
  ],
  imports: [
    StacheSharedModule,
    CommonModule
  ],
  exports: [
    StacheAffixComponent,
    StacheAffixTopDirective
  ]
})
export class StacheAffixModule { }
