import {
  NgModule
} from '@angular/core';

import {
  StacheVideoComponent
} from './video.component';

@NgModule({
  declarations: [
    StacheVideoComponent
  ],
  exports: [
    StacheVideoComponent
  ]
})
export class StacheVideoModule { }
