import {
  Component,
  OnInit
} from '@angular/core';

import {
  SkyLibResourcesService
} from '@skyux/i18n';

import {
  take
} from 'rxjs/operators';

import {
  StacheConfigService
} from '../shared/config.service';

import {
  StacheNavLink
} from '../nav/nav-link';

const _get = require('lodash.get');

@Component({
  selector: 'stache-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class StacheFooterComponent implements OnInit {
  public copyrightDate: Date;
  public copyrightLabel: string;
  public siteName: string;
  public footerLinks: StacheNavLink[];

  constructor(
    private configService: StacheConfigService,
    private resourcesService: SkyLibResourcesService
  ) { }

  public ngOnInit(): void {
    this.copyrightDate = new Date();
    this.setFooterData();
  }

  private setFooterData(): void {
    const navItems = _get(
      this.configService,
      'skyux.appSettings.stache.footer.nav.items',
      []
    );

    this.footerLinks = navItems.map((link: any) => {
      return {
        name: link.title,
        path: link.route
      } as StacheNavLink;
    });

    this.resourcesService.getString('stache_copyright_label').pipe(
      take(1)
      )
      .subscribe((value) => {
        this.copyrightLabel = _get(
          this.configService,
          'skyux.appSettings.stache.footer.copyrightLabel',
          value
        );
      });

    this.siteName = _get(
      this.configService,
      'skyux.app.title'
    );
  }
}
