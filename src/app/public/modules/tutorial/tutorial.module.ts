import {
  NgModule
} from '@angular/core';

import {
  StacheTutorialHeadingComponent
} from './tutorial-heading.component';

import {
  StacheTutorialSummaryComponent
} from './tutorial-summary.component';

import {
  StacheTutorialComponent
} from './tutorial.component';

@NgModule({
  declarations: [
    StacheTutorialComponent,
    StacheTutorialHeadingComponent,
    StacheTutorialSummaryComponent
  ],
  exports: [
    StacheTutorialComponent,
    StacheTutorialHeadingComponent,
    StacheTutorialSummaryComponent
  ]
})
export class StacheTutorialModule { }
