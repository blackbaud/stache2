import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit, AfterViewInit } from '@angular/core';

import { StacheNavService } from '../nav';

@Directive({
  selector: '[stacheRouterLink]'
})
export class StacheRouterLinkDirective implements AfterViewInit {
  @Input()
  public stacheRouterLink: string;

  @Input()
  public fragment: string;

  constructor(
    private navService: StacheNavService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  public ngAfterViewInit(): void {
    this.renderer.setAttribute(this.el.nativeElement, 'href', this.generateUrl());
  }

  @HostListener('click', ['$event'])
  public navigate(event: MouseEvent): void {
    event.preventDefault();
    if (event.ctrlKey || event.metaKey) {
      window.open(this.generateUrl());
    } else {
      this.navService.navigate({
        path: this.stacheRouterLink,
        fragment: this.fragment
      });
    }
  }

  private generateUrl(): string {
    const href = window.location.href;
    if (href.includes(this.stacheRouterLink) || this.stacheRouterLink === '.') {
      return `${href}#${this.fragment}`;
    } else {
      const routerLink = this.stacheRouterLink.substring(this.stacheRouterLink.indexOf('/'));
      return `${href}${routerLink}#${this.fragment}`;
    }
  }
}
