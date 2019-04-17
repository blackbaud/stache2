import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StacheNavModule } from '../nav/nav.module';
import { StacheBreadcrumbsComponent } from './breadcrumbs.component';
import { StacheLinkModule } from '../link/link.module';

@NgModule({
  declarations: [
    StacheBreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    StacheNavModule,
    StacheLinkModule
  ],
  exports: [
    StacheBreadcrumbsComponent
  ]
})
export class StacheBreadcrumbsModule { }
