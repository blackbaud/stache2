import {
  Component,
  Input,
  HostListener} from '@angular/core';
import {
  StacheNav,
  StacheNavLink
} from '../nav';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { StacheWindowRef } from '../shared';

@Component({
  selector: 'stache-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss']
})
export class StacheTableOfContentsComponent {
  @Input()
  public routes: StacheNavLink[];
}
