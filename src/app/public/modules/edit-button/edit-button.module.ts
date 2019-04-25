import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  StacheEditButtonComponent
} from './edit-button.component';

import {
  StacheSharedModule
} from '../shared/shared.module';

@NgModule({
  declarations: [
    StacheEditButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StacheSharedModule,
    StacheEditButtonComponent
  ]
})
export class StacheEditButtonModule { }
