import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StacheNavModule } from '../nav';
import { StacheSidebarComponent } from './sidebar.component';
import { StacheSidebarWrapperComponent } from './sidebar-wrapper.component';
import { StacheLinkModule } from '../link';
import {
  StacheResourcesModule
} from '../shared/stache-resources.module';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyAppRuntimeModule
} from '@skyux-sdk/builder/runtime';

@NgModule({
  declarations: [
    StacheSidebarComponent,
    StacheSidebarWrapperComponent
  ],
  imports: [
    CommonModule,
    StacheNavModule,
    StacheLinkModule,
    SkyAppRuntimeModule,
    SkyI18nModule,
    StacheResourcesModule
  ],
  exports: [
    StacheSidebarComponent,
    StacheSidebarWrapperComponent
  ]
})
export class StacheSidebarModule { }
