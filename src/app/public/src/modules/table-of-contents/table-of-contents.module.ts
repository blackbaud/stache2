import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StacheNavModule } from '../nav';
import { StacheTableOfContentsComponent } from './table-of-contents.component';
import { StacheAffixModule } from '../affix';

@NgModule({
  declarations: [
    StacheTableOfContentsComponent
  ],
  imports: [
    CommonModule,
    StacheNavModule,
    StacheAffixModule
  ],
  exports: [
    StacheTableOfContentsComponent
  ]
})
export class StacheTableOfContentsModule { }
