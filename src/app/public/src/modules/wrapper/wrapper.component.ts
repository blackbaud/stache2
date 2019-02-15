/* tslint:disable:component-selector */
import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  AfterViewInit,
  ChangeDetectorRef,
  HostListener
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import { StacheTitleService } from './title.service';
import { StacheConfigService, StacheJsonDataService, StacheOmnibarAdapterService, StacheWindowRef } from '../shared';
import { StacheNavLink } from '../nav';
import { StacheNavService } from '../nav/nav.service';
import { StachePageAnchorService } from '../page-anchor/page-anchor.service';
import { InputConverter } from '../shared';

const _get = require('lodash.get');

@Component({
  selector: 'stache',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class StacheWrapperComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input()
  public pageTitle: string;

  @Input()
  public windowTitle: string;

  @Input()
  public navTitle: string;

  @Input()
  public layout = 'sidebar';

  @Input()
  public sidebarRoutes: StacheNavLink[];

  @Input()
  public breadcrumbsRoutes: StacheNavLink[];

  @Input()
  public showBreadcrumbs: boolean = true;

  @Input()
  public showEditButton: boolean = this.checkEditButtonUrl();

  @Input()
  @InputConverter()
  public showFooter: boolean = this.checkFooterData();

  @Input()
  public showTableOfContents: boolean = false;

  @Input()
  public showBackToTop: boolean = true;

  @Input()
  public showInNav: boolean = true;

  public jsonData: any;
  public inPageRoutes: StacheNavLink[] = [];
  public ngUnsubscribe = new Subject();
  private pageAnchorSubscription: Subscription;
  private currentRoute: string = '';

  public constructor(
    private config: StacheConfigService,
    private dataService: StacheJsonDataService,
    private pageAnchorService: StachePageAnchorService,
    private titleService: StacheTitleService,
    private route: ActivatedRoute,
    private navService: StacheNavService,
    private cdr: ChangeDetectorRef,
    private windowRef: StacheWindowRef,
    private router: Router,
    private omnibarService: StacheOmnibarAdapterService) { }

  @HostListener('window:scroll')
  public onScroll() {
    this.inPageRoutes = this.pageAnchorService.updatePageAnchorsOnScroll();
    this.navService.updateRoutesOnScroll(this.inPageRoutes);
  }

  public ngOnInit(): void {
    this.route.url.subscribe(url => this.inPageRoutes = this.pageAnchorService.pageAnchors);
    this.currentRoute = this.router.url.split('#')[0];
    this.omnibarService.checkForOmnibar();
    this.jsonData = this.dataService.getAll();
  }

  public ngAfterViewInit() {
    this.inPageRoutes = this.pageAnchorService.pageAnchors;
    const preferredDocumentTitle = this.getPreferredDocumentTitle();
    this.titleService.setTitle(preferredDocumentTitle);
    this.checkRouteHash();
    this.cdr.detectChanges();
  }

  public ngOnDestroy(): void {
    this.destroyPageAnchorSubscription();
  }

  private getPreferredDocumentTitle(): string {
    return this.windowTitle || this.pageTitle || this.navTitle || this.getTutorialHeader();
  }

  private getTutorialHeader(): string {
    const currentTutorialHeader = this.windowRef.nativeWindow.document.querySelector(`.stache-tutorial-heading`);
    if (currentTutorialHeader && currentTutorialHeader.textContent) {
      return currentTutorialHeader.textContent.trim();
    }
  }

  private checkEditButtonUrl(): boolean {
    const url = _get(this.config, 'skyux.appSettings.stache.editButton.url');
    return url !== undefined;
  }

  private checkFooterData(): boolean {
    const footerData = _get(this.config, 'skyux.appSettings.stache.footer');
    return footerData !== undefined;
  }

  private checkRouteHash(): void {
    this.route.fragment
      .subscribe((fragment: string) => {
        let url = '';
        this.route.url.subscribe(segments => url = segments.join('/')).unsubscribe();
        if (fragment) {
          this.navService.navigate({ path: url, fragment });
        }
      })
      .unsubscribe();
  }

  private destroyPageAnchorSubscription(): void {
    if (this.pageAnchorSubscription) {
      this.pageAnchorSubscription.unsubscribe();
      this.pageAnchorSubscription = undefined;
    }
  }
}
