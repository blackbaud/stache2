import { Component, Input, ChangeDetectorRef, ChangeDetectionStrategy, HostBinding, HostListener, ElementRef } from '@angular/core';

import { StacheNav, StacheNavLink } from '../nav';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { StacheWindowRef } from '../../..';

@Component({
  selector: 'stache-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StacheTableOfContentsComponent implements StacheNav, AfterViewInit {
  @Input()
  public routes: StacheNavLink[] = [];
  @HostBinding('class.active')
  public active: boolean = false;
  private activeAnchor: HTMLElement;
  private offsetPadding = 80;
  private anchors: NodeListOf<Element> = window.document.querySelectorAll('stache-page-anchor div');

  constructor(private cdr: ChangeDetectorRef,
    private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  public onScroll(event: Event) {
    console.log('scroll');
    // TODO: Visual bug when clicking to link and then scrolling
    setTimeout(() => { this.displayActiveAnchor(); }, 0);
  }

  public displayActiveAnchor() {
    // TODO: Use stache window reference
    this.routes.map(route => {
      route.isActive = false;
      if (this.activeAnchor) {
        if (this.activeAnchor.id === route.fragment) {
          route.isActive = true;
        }
      }
    });
    Array.from(this.anchors).map((anchor: HTMLElement) => {
      if (window.pageYOffset >= anchor.offsetParent.offsetTop - 10) {
        this.activeAnchor = anchor;
      }
    });
  }

  public ngAfterViewInit() {
    this.cdr.markForCheck();
    // TODO: Visual bug when clicking to link and then scrolling
    setTimeout(() => { this.displayActiveAnchor(); }, 0);
  }
}
