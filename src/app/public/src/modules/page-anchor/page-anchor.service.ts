import { Injectable } from '@angular/core';
import { StacheNavLink, StacheNavService } from '../nav';
import { SkyAppWindowRef } from '@skyux/core';
import { Router, NavigationStart } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StachePageAnchorService {
  // public pageAnchors: StacheNavLink[] = [];
  public pageAnchors = new BehaviorSubject<BehaviorSubject<StacheNavLink>[]>([]);
  public customPageAnchors: StacheNavLink[] = [];
  public currentBodyHeight = new BehaviorSubject<number>(0);
  private currentPageUrl: string;

  constructor(
    private windowRef: SkyAppWindowRef,
    private router: Router,
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

  public setCustomPageAnchors(pageAnchors: StacheNavLink[]) {
    this.customPageAnchors = pageAnchors;
  }

  private onScroll() {
    let document = this.windowRef.nativeWindow.document;
    if (this.currentBodyHeight.getValue() !== document.body.scrollHeight) {
      // Update the page anchor offsets when the page height updates
      this.currentBodyHeight.next(document.body.scrollHeight);
    }
    if (this.customPageAnchors.length) {
      this.navService.updateRoutesOnScroll(this.customPageAnchors);
    } else {
      this.navService.updateRoutesOnScroll(this.pageAnchors.getValue());
    }
    this.pageAnchors.next(this.pageAnchors.getValue());
  }

  private onNavigate(event: any) {
    if (event instanceof NavigationStart) {
      if (event.url.split('#')[0] !== this.currentPageUrl) {
        this.currentPageUrl = event.url.split('#')[0];
        this.pageAnchors.next([]);
        this.customPageAnchors = [];
        this.currentBodyHeight.next(this.windowRef.nativeWindow.document.body.scrollHeight);
      }
    }
  }
}
