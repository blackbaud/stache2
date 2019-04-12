import {
  NgModule
} from '@angular/core';

import {
  SKY_LIB_RESOURCES_PROVIDERS
} from '@skyux/i18n';

import {
  StacheResourcesProvider
} from '../../plugin-resources/stache-resources-provider';

@NgModule({
  providers: [{
    provide: SKY_LIB_RESOURCES_PROVIDERS,
    useClass: StacheResourcesProvider,
    multi: true
  }]
})
export class StacheResourcesModule { }
