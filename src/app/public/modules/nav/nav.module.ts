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
  StacheRouterLinkDirective
} from './link.directive';

import {
  StacheNavComponent
} from './nav.component';

import {
  StacheResourcesModule
} from '../shared/stache-resources.module';

import {
  StacheNavService
 } from './nav.service';

import {
  StacheSharedModule
} from '../shared/shared.module';

@NgModule({
  declarations: [
    StacheNavComponent,
    StacheRouterLinkDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    StacheSharedModule,
    StacheResourcesModule
  ],
  exports: [
    StacheNavComponent,
    StacheRouterLinkDirective
  ],
  providers: [
    StacheNavService
  ]
})
export class StacheNavModule { }
