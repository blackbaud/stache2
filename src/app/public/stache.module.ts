const objectAssign = require('es6-object-assign');
objectAssign.polyfill();
import {
  NgModule
} from '@angular/core';

import {
  SkyImageModule
} from '@blackbaud/skyux-lib-media';

import {
  StacheActionButtonsModule
} from './modules/action-buttons/action-buttons.module';

import {
  StacheAffixModule
} from './modules/affix/affix.module';

import {
  StacheAnalyticsModule
} from './modules/analytics/analytics.module';

import {
  StacheBackToTopModule
} from './modules/back-to-top/back-to-top.module';

import {
  StacheBlockquoteModule
} from './modules/blockquote/blockquote.module';

import {
  StacheBreadcrumbsModule
} from './modules/breadcrumbs/breadcrumbs.module';

import {
  StacheCodeModule
} from './modules/code/code.module';

import {
  StacheEditButtonModule
} from './modules/edit-button/edit-button.module';

import {
  StacheGridModule
} from './modules/grid/grid.module';

import {
  StacheHeroModule
} from './modules/hero/hero.module';

import {
  StacheIncludeModule
} from './modules/include/include.module';

import {
  StacheLayoutModule
} from './modules/layout/layout.module';

import {
  StacheMarkdownModule
} from './modules/markdown/markdown.module';

import {
  StacheNavModule
} from './modules/nav/nav.module';

import {
  StachePageAnchorModule
} from './modules/page-anchor/page-anchor.module';

import {
  StachePageHeaderModule
} from './modules/page-header/page-header.module';

import {
  StachePageSummaryModule
} from './modules/page-summary/page-summary.module';

import {
  StacheSharedModule
} from './modules/shared/shared.module';

import {
  StacheSidebarModule
} from './modules/sidebar/sidebar.module';

import {
  StacheTableOfContentsModule
} from './modules/table-of-contents/table-of-contents.module';

import {
  StacheTutorialModule
} from './modules/tutorial/tutorial.module';

import {
  StacheTutorialStepModule
} from './modules/tutorial-step/tutorial-step.module';

import {
  StacheVideoModule
} from './modules/video/video.module';

import {
  StacheFooterModule
} from './modules/footer/footer.module';

import {
  StacheWrapperModule
} from './modules/wrapper/wrapper.module';

import {
  StacheHideFromSearchModule
} from './modules/hide-from-search/hide-from-search.module';

import {
  AppSkyModule
} from './app-sky.module';

export * from './modules/shared';

@NgModule({
  exports: [
    AppSkyModule,
    StacheActionButtonsModule,
    StacheAffixModule,
    StacheAnalyticsModule,
    StacheBackToTopModule,
    StacheBlockquoteModule,
    StacheBreadcrumbsModule,
    StacheCodeModule,
    StacheEditButtonModule,
    StacheFooterModule,
    StacheGridModule,
    StacheHeroModule,
    StacheHideFromSearchModule,
    SkyImageModule,
    StacheIncludeModule,
    StacheLayoutModule,
    StacheMarkdownModule,
    StacheNavModule,
    StachePageAnchorModule,
    StachePageHeaderModule,
    StachePageSummaryModule,
    StacheSharedModule,
    StacheSidebarModule,
    StacheTableOfContentsModule,
    StacheTutorialModule,
    StacheTutorialStepModule,
    StacheVideoModule,
    StacheWrapperModule
  ]
})
export class StacheModule { }
