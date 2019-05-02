import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  StacheResourcesModule
} from '../shared/stache-resources.module';

import {
  StacheBackToTopComponent
} from './back-to-top.component';

import {
  StacheSharedModule
} from '../shared/shared.module';

@NgModule({
  declarations: [
    StacheBackToTopComponent
  ],
  imports: [
    CommonModule,
    StacheSharedModule,
    SkyI18nModule,
    StacheResourcesModule
  ],
  exports: [
    StacheBackToTopComponent
  ]
})
export class StacheBackToTopModule { }
