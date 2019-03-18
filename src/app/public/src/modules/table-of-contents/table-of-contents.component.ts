import { Component, Input } from '@angular/core';
import { StacheNavLink } from '../nav';
import { StacheWindowRef, StacheOmnibarAdapterService } from '../shared';
import { StachePageAnchorService } from '../page-anchor';

@Component({
  selector: 'stache-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss']
})
export class StacheTableOfContentsComponent {
  @Input()
  public routes: StacheNavLink[];
  private documentBottom: number;
  private viewTop: number;
  private headerHeight: number;

  constructor(
    private windowRef: StacheWindowRef,
    private omnibarService: StacheOmnibarAdapterService,
    private pageAnchorService: StachePageAnchorService
  ) {
    this.pageAnchorService.pageAnchors.subscribe(anchors => {
      this.updateRoutesOnScroll(anchors);
    });
  }

  public updateRoutesOnScroll(routes: any[]) {
    if (routes && routes.length) {
      this.updateView(routes);
    }
  }

  // Updates ng-class level trigger to show/hide blue border marking location on page
  public updateView(routes: StacheNavLink[]) {
    this.trackViewTop();
    this.isCurrent(routes);
  }

  private isCurrent(routes: any[]): void {
    let updatedRoute;
    routes.forEach((route, index) => {
      if ((this.windowRef.nativeWindow.innerHeight + 5) >= this.documentBottom) {
        let currentRoute = route.getValue();
        currentRoute.isCurrent = route === routes[routes.length - 1];
        updatedRoute = currentRoute;
      } else {
        let currentRoute = route.getValue();
        currentRoute.isCurrent = route.getValue().offsetTop <= this.viewTop
          && (routes[index + 1] === undefined || routes[index + 1].getValue().offsetTop > this.viewTop);
        updatedRoute = currentRoute;
      }
      route.next(updatedRoute as StacheNavLink);
    });
  }

    // Checks to see if stache-wrapper exists and provides offset from top of window
    private getHeaderHeight() {
      const stacheWrapper = this.windowRef.nativeWindow.document.querySelector('.stache-wrapper');

      if (stacheWrapper) {
        this.headerHeight = stacheWrapper.offsetTop;
      }
    }

    private trackViewTop() {
      this.getHeaderHeight();

      this.viewTop = ((this.windowRef.nativeWindow.pageYOffset - this.headerHeight) + this.omnibarService.getHeight());

      // Tracks page bottom so final route can be highlighted if associated anchor provides limited content
      // (Logic based on Angular implementation)
      this.documentBottom = Math.round(this.windowRef.nativeWindow.document.documentElement.getBoundingClientRect().bottom);
    }
}
