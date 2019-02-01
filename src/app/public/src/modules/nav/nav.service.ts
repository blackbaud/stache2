import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StacheWindowRef } from '../shared';
import { StacheNavLink } from './nav-link';

@Injectable()
export class StacheNavService {
  private headerHeight: number;
  private pageOffset: number;
  private documentBottom: number;

  public constructor(
    private router: Router,
    private windowRef: StacheWindowRef) {}

  public navigate(route: any): void {
    let extras: any = { queryParamsHandling: 'merge'};
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

  public updateRoutesOnScroll(routes: StacheNavLink[]) {
    this.updateView(routes);
  }

  // Updates ng-class level trigger to show/hide blue border marking location on page
  public updateView(routes: StacheNavLink[]) {
    this.trackPageOffset();
    this.isCurrent(routes);
  }

  // Checks to see if stache-wrapper exists and provides offset from top of window
  private getHeaderHeight() {
    const stacheWrapper = this.windowRef.nativeWindow.document.querySelector('.stache-wrapper');

    if (stacheWrapper) {
      this.headerHeight = stacheWrapper.offsetTop;
    }
  }

  private trackPageOffset() {
    this.getHeaderHeight();

    // Represents top of page
    // headerHeight buffer removes discrepency when hero or other 'header' elements exist
    // 50px buffer aids in click-to-anchor and user visualization
    this.pageOffset = ((this.windowRef.nativeWindow.pageYOffset - this.headerHeight) + 50);

    // Tracks page bottom so final route can be highlighted if associated anchor provides limited content
    // (Logic based on Angular implementation)
    this.documentBottom = Math.round(this.windowRef.nativeWindow.document.documentElement.getBoundingClientRect().bottom);
  }

  private isCurrent(routes: StacheNavLink[]): void {
    routes.forEach((route, index) => {
      if ((this.windowRef.nativeWindow.innerHeight + 5) >= this.documentBottom) {
        route.isCurrent = route === routes[routes.length - 1];
      } else {
        route.isCurrent = route.offsetTop <= this.pageOffset
         && (routes[index + 1] === undefined || routes[index + 1].offsetTop > this.pageOffset);
      }
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
