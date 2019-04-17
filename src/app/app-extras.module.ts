import { NgModule } from '@angular/core';

import { StacheModule } from './public';

import {
  AppSkyModule
} from './public/app-sky.module';

@NgModule({
  imports: [
    StacheModule
  ],
  exports: [
    AppSkyModule,
    StacheModule
  ],
  providers: [],
  declarations: []
})
export class AppExtrasModule { }
