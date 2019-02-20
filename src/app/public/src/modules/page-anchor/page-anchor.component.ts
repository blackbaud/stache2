import {
  Component,
  ElementRef,
  AfterViewInit,
  Input,
  ChangeDetectorRef
} from '@angular/core';
import {
  StacheWindowRef
} from '../shared';
import { StacheNavLink } from '../nav';
import { StachePageAnchorService } from './page-anchor.service';

@Component({
  selector: 'stache-page-anchor',
  templateUrl: './page-anchor.component.html',
  styleUrls: ['./page-anchor.component.scss']
})
export class StachePageAnchorComponent implements StacheNavLink, AfterViewInit {
  public name: string = '';
  public fragment: string;
  public path: string[];

  @Input()
  public anchorId?: string;

  public constructor(
    private elementRef: ElementRef,
    private windowRef: StacheWindowRef,
    private anchorService: StachePageAnchorService,
    private cdr: ChangeDetectorRef) {}

  public scrollToAnchor(): void {
    this.windowRef.nativeWindow.document.querySelector(`#${this.fragment}`).scrollIntoView();
  }

  public ngAfterViewInit(): void {
    const anchor = this.anchorService.generateAnchor(this.elementRef.nativeElement, this.anchorId);
    this.name = anchor.name;
    this.fragment = anchor.fragment;
    this.path = anchor.path as any;
    this.cdr.detectChanges();
  }
}
