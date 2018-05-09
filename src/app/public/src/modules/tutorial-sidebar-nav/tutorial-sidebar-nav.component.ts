import {
  Component, OnInit, Input
} from '@angular/core';
import { StacheNavLink } from '../nav';
import { StacheRouteService } from '../shared';

@Component({
  selector: 'stache-toc-nav',
  templateUrl: './tutorial-sidebar-nav.component.html',
  styleUrls: ['./tutorial-sidebar-nav.component.scss']
})
export class TutorialSidebarNavComponent implements OnInit {
  @Input()
  public headings: StacheNavLink[];
  public heading: string;
  public headingRoute: string;

  constructor(
    private routeService: StacheRouteService) { }

  public ngOnInit(): void {
    if (!this.headings) {
      // Replace this with trigger to read directive. Mark as nav-trackable
      const activeRoutes = this.routeService.getActiveRoutes();
      this.headings = this.filterRoutes(activeRoutes);
    }
  }

  private filterRoutes(activeRoutes: StacheNavLink[]): StacheNavLink[] {
    const root = activeRoutes[0];

    this.heading = root.name;
    this.headingRoute = `/${root.path}`;

    return root.children;
  }
}
