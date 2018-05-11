import { Directive, ElementRef, HostListener, HostBinding, Input, Renderer2, OnChanges, AfterViewInit } from '@angular/core';

import { LocationStrategy } from '@angular/common';

import { StacheNavService } from '../nav';

import { StacheRouteService, StacheWindowRef } from '../shared';

@Directive({
  selector: '[stacheRouterLink]'
})
export class StacheRouterLinkDirective implements OnChanges, AfterViewInit {

  public _stacheRouterLink: string = '';

  @Input('stacheRouterLink')
  set stacheRouterLink(routerLink: string) {
    if (routerLink === '.') {
      this._stacheRouterLink = this.routerService.getActiveUrl();
    } else {
      this._stacheRouterLink = routerLink;
    }
  }

  get stacheRouterLink() {
    return this._stacheRouterLink;
  }

  @Input()
  public fragment: string;

  // the url displayed on the anchor element.
  @HostBinding()
  public href: string;

  constructor(
    private navService: StacheNavService,
    private routerService: StacheRouteService,
    private el: ElementRef,
    private locationStrategy: LocationStrategy,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  public ngOnChanges(changes: {}): any { this.updateTargetUrlAndHref(); }

  public ngAfterViewInit() {
    this.updateTargetUrlAndHref();
  }

  @HostListener('click', ['$event'])
  public navigate(event: MouseEvent): void {
    if (event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }
    event.preventDefault();
    this.navService.navigate({
      path: this.stacheRouterLink,
      fragment: this.fragment
    });
  }

  private updateTargetUrlAndHref(): void {
    let path = `${this.stacheRouterLink}`;
    if (this.fragment) {
      path += `#${this.fragment}`;
    }
    this.href = this.locationStrategy.prepareExternalUrl(path);
  }
}
