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
  SkyActionButtonModule
} from '@skyux/layout';

import {
  SkySearchModule
} from '@skyux/lookup';

@NgModule({
  exports: [
    SkyActionButtonModule,
    SkyI18nModule,
    SkyMediaQueryModule,
    SkySearchModule
  ]
})
export class AppSkyModule { }
