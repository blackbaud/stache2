import { Component, Input, ChangeDetectorRef, ChangeDetectionStrategy, HostBinding, HostListener } from '@angular/core';
import { StacheNav, StacheNavLink } from '../nav';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { StacheWindowRef } from '../shared';

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

  private activeRoute: StacheNavLink;
  private anchors: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private windowRef: StacheWindowRef
  ) { }

  @HostListener('window:scroll', ['$event'])
  public onScroll(event: Event) {
    setTimeout(() => {
      this.setActiveRoute();
    }, 0);
  }

  @HostListener('click', ['$event'])
  public onClick(event: Event) {
    setTimeout(() => {
      this.setActiveRoute();
    }, 0);
  }

  public setActiveRoute() {
    Array.from(this.anchors).map((anchor: any) => {
      const documentEl = document.documentElement;
      const pageOffset = documentEl.scrollTop + this.windowRef.nativeWindow.innerHeight;
      const pageHeight = documentEl.offsetHeight;

      // When scroll reaches bottom of the page select last ToC item (Based on Angular.io implementation)
      // route.isActive = false;

      if (pageOffset === pageHeight) {
        this.activeRoute = this.routes[this.routes.length - 1];
      } else if ((this.windowRef.nativeWindow.pageYOffset >= (anchor.offsetTop >= 0 ?
        anchor.offsetTop :
        anchor.offsetParent.offsetTop) - 20)) {
        this.activeRoute = this.routes.filter((route: StacheNavLink) => route.name === anchor.textContent.trim())[0];
      }
    });

    if (this.activeRoute) {
      this.routes.map((route: StacheNavLink) => {
        if (route.name !== this.activeRoute.name) {
          route.isActive = false;
        }
      });
      this.activeRoute.isActive = true;
    }
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      this.cdr.markForCheck();
      this.anchors = this.windowRef.nativeWindow.document.querySelectorAll('stache-page-anchor div');
      console.log(this.anchors);
      this.setActiveRoute();
    }, 0);

  }
}
