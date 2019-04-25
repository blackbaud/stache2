import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  StacheNavModule
} from '../nav/nav.module';

import {
  StacheBreadcrumbsComponent
} from './breadcrumbs.component';

import {
  StacheSharedModule
} from '../shared/shared.module';

@NgModule({
  declarations: [
    StacheBreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    StacheNavModule,
    StacheSharedModule
  ],
  exports: [
    StacheBreadcrumbsComponent
  ]
})
export class StacheBreadcrumbsModule { }
