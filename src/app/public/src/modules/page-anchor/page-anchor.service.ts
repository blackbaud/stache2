import { Injectable } from '@angular/core';
import { StacheNavLink, StacheNavService } from '../nav';
import { SkyAppWindowRef } from '@skyux/core';
import { Router, NavigationStart } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StachePageAnchorService {
  public pageAnchors: StacheNavLink[] = [];
  public currentBodyHeight = new BehaviorSubject<number>(0);

  constructor(
    private windowRef: SkyAppWindowRef,
    private router: Router,
    private navService: StacheNavService
  ) {
    this.windowRef.nativeWindow.addEventListener('scroll', () => {
      if (this.pageAnchors) {
        this.pageAnchors.forEach(anchor => {
          const document = this.windowRef.nativeWindow.document;
          // Update the page anchor offsets when the page height updates
          if (this.currentBodyHeight.getValue() !== document.body.scrollHeight) {
            this.refreshAnchors();
          }
          return this.pageAnchors;
        });
        this.navService.updateRoutesOnScroll(this.pageAnchors);
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.pageAnchors = [];
        this.refreshAnchors();
      }
    });
  }

  public addPageAnchor(anchor: StacheNavLink) {
    if (anchor.name) {
      let existingAnchor = this.pageAnchors.filter((pageAnchor: any) => pageAnchor.name === anchor.name)[0];
      if (existingAnchor) {
        existingAnchor.offsetTop = anchor.offsetTop;
      } else {
        if (anchor.order !== undefined) {
          this.pageAnchors.splice(anchor.order, 0, anchor);
        } else {
          this.pageAnchors.push(anchor);
        }
      }
    }
  }

  // Sometimes offsetTop will be a sub-zero number and will ruin page tracking sync
  // This runs up the parent tree until it finds an element that has a useable offset value
  public getValidOffsetTop(element: any): number {
    if (element.offsetTop < 1 && element.parentElement) {
      return this.getValidOffsetTop(element.parentElement);
    }
    return element.offsetTop;
  }

  private refreshAnchors() {
    this.currentBodyHeight.next(document.body.scrollHeight);
    this.pageAnchors.forEach(anchor => {
      anchor.offsetTop = this.getValidOffsetTop(anchor.element);
    });
  }
}
