import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StacheNavComponent } from './nav.component';
import { StacheLinkModule } from '../link';
import { StacheResourcesModule } from '../shared/stache-resources.module';

@NgModule({
  declarations: [
    StacheNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StacheLinkModule,
    StacheResourcesModule
  ],
  providers: [
  ],
  exports: [
    StacheNavComponent
  ]
})
export class StacheNavModule { }
