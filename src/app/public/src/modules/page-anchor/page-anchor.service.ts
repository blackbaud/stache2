import { Injectable } from '@angular/core';
import { StacheNavLink, StacheNavService } from '../nav';
import { SkyAppWindowRef } from '@skyux/core';
import { Router, NavigationStart } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class StachePageAnchorService {
  public pageAnchors = new BehaviorSubject<BehaviorSubject<StacheNavLink>[]>([]);
  public customPageAnchors = new BehaviorSubject<BehaviorSubject<StacheNavLink>[]>([]);
  public currentBodyHeight = new BehaviorSubject<number>(0);
  private currentPageUrl: string;

  constructor(
    private windowRef: SkyAppWindowRef,
    private router: Router
  ) {
    this.currentPageUrl = this.router.url.split('#')[0];
    Observable
      .fromEvent(this.windowRef.nativeWindow, 'scroll')
      .map(e => this.windowRef.nativeWindow.document.body.scrollHeight)
      .pairwise()
      .subscribe(height => {
        if (height[0] !== height[1]) {
          this.currentBodyHeight.next(height[1]);
        }
        this.onScroll();
      });
    this.router.events.subscribe((event) => {
      this.onNavigate(event);
    });
  }

  public setCustomPageAnchors(pageAnchors: StacheNavLink[]) {
    this.customPageAnchors.next(pageAnchors.map(anchor => new BehaviorSubject<StacheNavLink>(anchor)));
  }

  private onScroll() {
    let anchors: any;
    if (this.customPageAnchors.getValue().length) {
      anchors = this.customPageAnchors.getValue();
    } else {
      anchors = this.pageAnchors.getValue();
    }
    this.pageAnchors.next(anchors);
  }

  private onNavigate(event: any) {
    if (event instanceof NavigationStart) {
      if (event.url.split('#')[0] !== this.currentPageUrl) {
        this.currentPageUrl = event.url.split('#')[0];
        this.pageAnchors.next([]);
        this.customPageAnchors.next([]);
        this.currentBodyHeight.next(this.windowRef.nativeWindow.document.body.scrollHeight);
      }
    }
  }
}
