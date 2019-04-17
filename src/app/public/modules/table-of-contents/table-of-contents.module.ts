import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StacheNavModule } from '../nav';
import { StacheTableOfContentsComponent } from './table-of-contents.component';
import { StacheTableOfContentsWrapperComponent } from './table-of-contents-wrapper.component';
import { SkyAppRuntimeModule } from '@skyux-sdk/builder/runtime';
import { StacheAffixModule } from '../affix';
import { SkyI18nModule } from '@skyux/i18n';
import { StacheResourcesModule } from '../shared/stache-resources.module';

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
