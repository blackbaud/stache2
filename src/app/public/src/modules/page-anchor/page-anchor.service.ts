import { Injectable } from '@angular/core';
import { StacheNavLink, StacheNavService } from '../nav';
import { SkyAppWindowRef } from '@skyux/core';
import { Router, NavigationStart } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { StacheRouteService } from '../shared';

@Injectable()
export class StachePageAnchorService {
  public pageAnchors: StacheNavLink[] = [];
  public customPageAnchors: StacheNavLink[] = [];
  public currentBodyHeight = new BehaviorSubject<number>(0);
  private currentPageUrl: string;

  constructor(
    private windowRef: SkyAppWindowRef,
    private router: Router,
    private routerService: StacheRouteService,
    private navService: StacheNavService
  ) {
    this.currentPageUrl = this.router.url.split('#')[0];
    this.windowRef.nativeWindow.addEventListener('scroll', () => {
      this.onScroll();
    });
    this.router.events.subscribe((event) => {
      this.onNavigate(event);
    });
  }

  // Sometimes offsetTop will be a sub-zero number and will ruin page tracking sync
  // This function runs up the parent tree until it finds an element that has a useable offset value
  public getValidOffsetTop(element: any): number {
    if (element.offsetTop < 1 && element.parentElement) {
      return this.getValidOffsetTop(element.parentElement);
    }
    return element.offsetTop;
  }

  public generateAnchor(element: any, anchorId: any = undefined): StacheNavLink {
    const name = this.getName(element);
    const fragment = this.getFragment(name, anchorId);

    const anchor = {
      path: [this.routerService.getActiveUrl()],
      name: name,
      fragment: fragment,
      offsetTop: this.getValidOffsetTop(element),
      element: element
    } as StacheNavLink;

    this.pageAnchors.push(anchor);
    this.sortPageAnchors();
    return anchor;
  }

  public setCustomPageAnchors(pageAnchors: StacheNavLink[]) {
    this.customPageAnchors = pageAnchors;
  }

  private onScroll() {
    let document = this.windowRef.nativeWindow.document;
    if (this.pageAnchors.length) {
      if (this.currentBodyHeight.getValue() !== document.body.scrollHeight) {
        this.pageAnchors.forEach(anchor => {
            // Update the page anchor offsets when the page height updates
            this.currentBodyHeight.next(document.body.scrollHeight);
            anchor.offsetTop = this.getValidOffsetTop(anchor.element);
        });
      }
    }
    this.navService.updateRoutesOnScroll(this.customPageAnchors.length ? this.customPageAnchors : this.pageAnchors);
  }

  private onNavigate(event: any) {
    if (event instanceof NavigationStart) {
      if (event.url.split('#')[0] !== this.currentPageUrl) {
        this.currentPageUrl = event.url.split('#')[0];
        this.pageAnchors = [];
        this.customPageAnchors = [];
        this.currentBodyHeight.next(this.windowRef.nativeWindow.document.body.scrollHeight);
      }
    }
  }

  private getName(element: any): string {
    return element.textContent.trim();
  }

  private getFragment(name: string, anchorId: string): string {
    return anchorId || name
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  }

  private sortPageAnchors() {
    this.pageAnchors.sort((a: StacheNavLink, b: StacheNavLink) => {
      return a.offsetTop - b.offsetTop;
    });
  }
}
