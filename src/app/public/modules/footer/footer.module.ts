import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StacheFooterComponent } from './footer.component';
import { StacheNavModule } from '../nav/nav.module';
import { SkyI18nModule } from '@skyux/i18n';
import {
  StacheResourcesModule
} from '../shared/stache-resources.module';

@NgModule({
  imports: [
    CommonModule,
    StacheResourcesModule,
    StacheNavModule,
    SkyI18nModule
  ],
  declarations: [
    StacheFooterComponent
  ],
  exports: [
    StacheFooterComponent
  ],
  providers: [
  ]
})
export class StacheFooterModule { }
