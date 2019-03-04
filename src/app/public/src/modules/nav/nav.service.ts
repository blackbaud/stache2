import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StacheWindowRef, StacheOmnibarAdapterService } from '../shared';
import { StacheNavLink } from './nav-link';

@Injectable()
export class StacheNavService {
  private headerHeight: number = 0;
  private viewTop: number;
  private documentBottom: number;

  public constructor(
    private router: Router,
    private windowRef: StacheWindowRef,
    private omnibarService: StacheOmnibarAdapterService) {}

  public navigate(route: any): void {
    let extras: any = { queryParamsHandling: 'merge' };
    const currentPath = this.router.url.split('?')[0].split('#')[0];

    if (this.isExternal(route)) {
      this.windowRef.nativeWindow.location.href = route.path;
      return;
    }

    if (route.fragment) {
      if (this.isCurrentRoute(route.path, currentPath)) {
        this.navigateInPage(route.fragment);
        return;
      }
      extras.fragment = route.fragment;
    }

    if (Array.isArray(route.path)) {
      this.router.navigate(route.path, extras);
    } else {
      this.router.navigate([route.path], extras);
    }
  }

  public isExternal(route: any): boolean {
    let path = route;

    if (route.path) {
      path = route.path;
    }

    if (typeof path !== 'string') {
      return false;
    }
    return /^(https?|mailto|ftp):+|^(www)/.test(path);
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

  private isCurrentRoute(routePath: string | string[], currentPath: string): boolean {
    let path = routePath;

    if (Array.isArray(path)) {
      path = path.join('/');
    }

    return (path === '.' || currentPath.replace(/^\//, '') === path.replace(/^\//, ''));
  }

  private navigateInPage(fragment: string): void {
    const element = this.windowRef.nativeWindow.document.getElementById(fragment);

    if (element) {
      element.scrollIntoView();
      this.windowRef.nativeWindow.location.hash = fragment;
    } else {
      // The current page is the path intended, but no element with the fragment exists, scroll to
      // the top of the page.
      this.windowRef.nativeWindow.scroll(0, 0);
    }
  }
}
