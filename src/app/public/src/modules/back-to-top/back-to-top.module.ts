import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SkyAppRuntimeModule
} from '@skyux-sdk/builder/runtime';

import { StacheBackToTopComponent } from './back-to-top.component';

@NgModule({
  declarations: [
    StacheBackToTopComponent
  ],
  imports: [
    CommonModule,
    SkyAppRuntimeModule
  ],
  exports: [
    StacheBackToTopComponent
  ]
})
export class StacheBackToTopModule { }
