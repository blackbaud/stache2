import { Injectable } from '@angular/core';
import { StacheNavLink } from '../nav';
import { SkyAppWindowRef } from '@skyux/core';

@Injectable()
export class StachePageAnchorService {
  public pageAnchors: any[] = [];
  private currentBodyHeight: number;

  constructor(private windowRef: SkyAppWindowRef) {}

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

  public updatePageAnchorsOnScroll() {
    const body = this.windowRef.nativeWindow.document;
    // Update the page anchor offsets when the page height updates
    if (this.currentBodyHeight !== body.body.scrollHeight) {
      this.currentBodyHeight = body.body.scrollHeight;
      const anchors = this.windowRef.nativeWindow.document.querySelectorAll('stache-page-anchor');
      anchors.forEach((anchor: any, index: number) => {
        this.pageAnchors[index].offsetTop = this.getValidOffsetTop(anchor);
        this.addPageAnchor(this.pageAnchors[index]);
      });
    }
    return this.pageAnchors;
  }

  // Sometimes offsetTop will be a sub-zero number and will ruin page tracking sync
  // This runs up the parent tree until it finds an element that has a useable offset value
  public getValidOffsetTop(element: any): number {
    if (element.offsetTop < 1 && element.parentElement) {
      return this.getValidOffsetTop(element.parentElement);
    }
    return element.offsetTop;
  }
}
