import {
  Component,
  ElementRef,
  AfterViewInit,
  Input,
  ChangeDetectorRef
} from '@angular/core';
import {
  StacheWindowRef, StacheRouteService
} from '../shared';
import { StacheNavLink } from '../nav';
import { StachePageAnchorService } from './page-anchor.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'stache-page-anchor',
  templateUrl: './page-anchor.component.html',
  styleUrls: ['./page-anchor.component.scss']
})
export class StachePageAnchorComponent implements StacheNavLink, AfterViewInit {
  public anchor = new BehaviorSubject<StacheNavLink>(undefined);
  public name: string = '';
  public fragment: string;
  public path: string[];

  @Input()
  public anchorId?: string;

  public constructor(
    private elementRef: ElementRef,
    private windowRef: StacheWindowRef,
    private anchorService: StachePageAnchorService,
    private cdr: ChangeDetectorRef,
    private routerService: StacheRouteService) {
      this.anchorService.currentBodyHeight.subscribe(() => {
        this.updatePageAnchor();
      });
    }

  public scrollToAnchor(): void {
    this.windowRef.nativeWindow.document.querySelector(`#${this.fragment}`).scrollIntoView();
  }

  public ngAfterViewInit(): void {
    this.generateAnchor(this.elementRef.nativeElement, this.anchorId);
    this.cdr.detectChanges();
  }

  public generateAnchor(element: any, anchorId: any = undefined) {
    this.name = this.getName(element);
    this.fragment = this.getFragment(this.name, anchorId);
    this.path = [this.routerService.getActiveUrl()];

    this.anchor.next({
      path: this.path,
      name: this.name,
      fragment: this.fragment,
      offsetTop: this.getValidOffsetTop(this.elementRef.nativeElement)
    } as StacheNavLink);

    const pageAnchors = this.anchorService.pageAnchors.getValue();
    pageAnchors.push(this.anchor);
    this.sortPageAnchors(pageAnchors);
    this.anchorService.pageAnchors.next(pageAnchors);
  }

  private updatePageAnchor() {
    this.anchor.next({
      path: this.path,
      name: this.name,
      fragment: this.fragment,
      offsetTop: this.getValidOffsetTop(this.elementRef.nativeElement)
    } as StacheNavLink);
  }

  // Sometimes offsetTop will be a sub-zero number and will ruin page tracking sync
  // This function runs up the parent tree until it finds an element that has a useable offset value
  private getValidOffsetTop(element: any): number {
    if (element.offsetTop < 1 && element.parentElement) {
      return this.getValidOffsetTop(element.parentElement);
    }
    return element.offsetTop;
  }

  private getName(element: any): string {
    return element.textContent.trim();
  }

  private getFragment(name: string, anchorId: string): string {
    return anchorId || name
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  }

  // TODO: This might not sort properly, must check
  private sortPageAnchors(anchors: BehaviorSubject<StacheNavLink>[]) {
    anchors.sort((a: BehaviorSubject<StacheNavLink>, b: BehaviorSubject<StacheNavLink>) => {
      return a.getValue().offsetTop - b.getValue().offsetTop;
    });
  }
}
