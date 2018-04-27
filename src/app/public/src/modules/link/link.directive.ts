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
    const href = window.location.href;
    const routerLink = this.stacheRouterLink.substring(this.stacheRouterLink.indexOf('/'));
    this.renderer.setAttribute(this.el.nativeElement, 'href', `${href}${routerLink}#${this.fragment}`);
  }

  @HostListener('click', ['$event'])
  public navigate(event: MouseEvent): void {
    event.preventDefault();
    if (event.ctrlKey || event.metaKey) {
      const href = window.location.href;
      const routerLink = this.stacheRouterLink.substring(this.stacheRouterLink.indexOf('/'));
      window.open(`${href}${routerLink}#${this.fragment}`);
    } else {
      this.navService.navigate({
        path: this.stacheRouterLink,
        fragment: this.fragment
      });
    }
  }
}
