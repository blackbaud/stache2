import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

import { StacheLayout } from './layout';
import { StacheNavLink } from '../nav';
import { StacheWindowRef } from '../shared';

@Component({
  selector: 'stache-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class StacheLayoutComponent implements OnInit, StacheLayout, AfterViewInit {
  @Input()
  public pageTitle: string;

  @Input()
  public layoutType = 'sidebar';

  @Input()
  public inPageRoutes: StacheNavLink[];

  @Input()
  public showTableOfContents: boolean;

  @Input()
  public sidebarRoutes: StacheNavLink[];

  @Input()
  public breadcrumbsRoutes: StacheNavLink[];

  @Input()
  public showBreadcrumbs: boolean;

  @Input()
  public showEditButton: boolean;

  @Input()
  public showBackToTop: boolean;

  public templateRef: any;

  @ViewChild('blankLayout')
  private blankTemplateRef: any;

  @ViewChild('containerLayout')
  private containerTemplateRef: any;

  @ViewChild('sidebarLayout')
  private sidebarTemplateRef: any;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private windowRef: StacheWindowRef
  ) {

  }

  public ngOnInit(): void {
    switch (this.layoutType) {
      case 'blank':
        this.templateRef = this.blankTemplateRef;
        break;
      case 'sidebar':
        this.templateRef = this.sidebarTemplateRef;
        break;
      default:
        this.templateRef = this.containerTemplateRef;
        break;
    }
  }

  public ngAfterViewInit() {
    this.setMinHeight();
  }

  private setMinHeight() {
    let wrapper = this.elementRef.nativeElement.querySelector('.stache-layout-wrapper');
    let minHeight = this.windowRef.nativeWindow.innerHeight - wrapper.getBoundingClientRect().top;
    this.renderer.setStyle(wrapper, 'min-height', `${minHeight}px`);
  }
}
