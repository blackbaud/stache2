import {
  NgModule
} from '@angular/core';

import {
  SkyMediaQueryModule
} from '@skyux/core';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyAlertModule
} from '@skyux/indicators';

import {
  SkyActionButtonModule
} from '@skyux/layout';

import {
  SkySearchModule
} from '@skyux/lookup';

import {
  SkyCodeBlockModule
} from '@blackbaud/skyux-lib-code-block';

import {
  SkyClipboardModule
} from '@blackbaud/skyux-lib-clipboard';

@NgModule({
  exports: [
    SkyActionButtonModule,
    SkyAlertModule,
    SkyClipboardModule,
    SkyCodeBlockModule,
    SkyI18nModule,
    SkyMediaQueryModule,
    SkySearchModule
  ]
})
export class AppSkyModule { }
