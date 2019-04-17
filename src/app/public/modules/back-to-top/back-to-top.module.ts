import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SkyAppRuntimeModule
} from '@skyux-sdk/builder/runtime';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  StacheResourcesModule
} from '../shared/stache-resources.module';

import { StacheBackToTopComponent } from './back-to-top.component';

@NgModule({
  declarations: [
    StacheBackToTopComponent
  ],
  imports: [
    CommonModule,
    SkyAppRuntimeModule,
    SkyI18nModule,
    StacheResourcesModule
  ],
  providers: [
  ],
  exports: [
    StacheBackToTopComponent
  ]
})
export class StacheBackToTopModule { }
