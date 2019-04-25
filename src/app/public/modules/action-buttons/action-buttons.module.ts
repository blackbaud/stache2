import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SkyActionButtonModule
} from '@skyux/layout';

import {
  SkySearchModule
} from '@skyux/lookup';

import { StacheGridModule } from '../grid/grid.module';
import { StacheActionButtonsComponent } from './action-buttons.component';
import {
  StacheNavModule
} from '../nav/nav.module';

@NgModule({
  declarations: [
    StacheActionButtonsComponent
  ],
  imports: [
    CommonModule,
    SkyActionButtonModule,
    SkySearchModule,
    StacheNavModule,
    StacheGridModule
  ],
  exports: [
    StacheActionButtonsComponent
  ]
})
export class StacheActionButtonsModule { }
