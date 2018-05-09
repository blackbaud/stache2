import { Component, Input } from '@angular/core';

import { StacheLayout } from './layout';
import { InputConverter } from '../shared';
import { StacheNavLink } from '../nav';

@Component({
  selector: 'stache-layout-toc',
  templateUrl: './layout-toc.component.html',
  styleUrls: ['./layout-toc.component.scss']
})
export class StacheLayoutTocComponent implements StacheLayout {
  @Input()
  public pageTitle: string;

  @Input()
  public breadcrumbsRoutes: StacheNavLink[];

  @Input()
  public inPageRoutes: StacheNavLink[];

  @Input()
  public tocHeaders: StacheNavLink[];

  @Input()
  @InputConverter()
  public showBackToTop: boolean;

  @Input()
  @InputConverter()
  public showBreadcrumbs: boolean;

  @Input()
  @InputConverter()
  public showEditButton: boolean;

  @Input()
  @InputConverter()
  public showTableOfContents: boolean = false;
}
