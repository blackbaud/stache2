import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  RouterModule
} from '@angular/router';

import {
  StachePageAnchorComponent
} from './page-anchor.component';

import {
  StachePageAnchorService
} from './page-anchor.service';

import {
  StacheSharedModule
} from '../shared/shared.module';

@NgModule({
  declarations: [
    StachePageAnchorComponent
  ],
  imports: [
    StacheSharedModule,
    CommonModule,
    RouterModule
  ],
  providers: [
    StachePageAnchorService
  ],
  exports: [
    StachePageAnchorComponent
  ]
})
export class StachePageAnchorModule { }
