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
  SkyAppRuntimeModule
} from '@skyux-sdk/builder/runtime';

import {
  StacheAffixModule
} from '../affix/affix.module';

import {
  StacheNavModule
} from '../nav/nav.module';

import {
  StacheTableOfContentsComponent
} from './table-of-contents.component';

import {
  StacheTableOfContentsWrapperComponent
} from './table-of-contents-wrapper.component';

import {
  StacheResourcesModule
} from '../shared/stache-resources.module';

@NgModule({
  declarations: [
    StacheTableOfContentsWrapperComponent,
    StacheTableOfContentsComponent
  ],
  imports: [
    CommonModule,
    StacheNavModule,
    SkyAppRuntimeModule,
    StacheAffixModule,
    SkyI18nModule,
    StacheResourcesModule
  ],
  exports: [
    StacheTableOfContentsWrapperComponent,
    StacheTableOfContentsComponent
  ]
})
export class StacheTableOfContentsModule { }
