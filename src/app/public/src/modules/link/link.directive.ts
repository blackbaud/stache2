import { Directive, ElementRef, HostListener, HostBinding, Input, Renderer2, OnChanges, AfterViewInit } from '@angular/core';

import { LocationStrategy } from '@angular/common';

import { StacheNavService } from '../nav';

import { StacheRouteService } from '../shared';

@Directive({
  selector: '[stacheRouterLink]'
})
export class StacheRouterLinkDirective implements OnChanges, AfterViewInit {

  public _stacheRouterLink: string = '';

  @Input('stacheRouterLink')
  set stacheRouterLink(routerLink: string) {
    this._stacheRouterLink = routerLink;
  }

  get stacheRouterLink() {
    if (this._stacheRouterLink === '.') {
      return this.routerService.getActiveUrl();
    }
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
    event.preventDefault();
    if (event.ctrlKey || event.metaKey || event.shiftKey) {
      window.open(this.href);
    } else {
      this.navService.navigate({
        path: this.stacheRouterLink,
        fragment: this.fragment
      });
    }
  }

  private updateTargetUrlAndHref(): void {
    this.href = this.locationStrategy.prepareExternalUrl(`${this.stacheRouterLink}#${this.fragment}`);
  }
}
