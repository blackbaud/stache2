import {
  ComponentFixture,
  TestBed,
  async
} from '@angular/core/testing';

import {
  RouterTestingModule
} from '@angular/router/testing';

import {
  expect
} from '@skyux-sdk/testing';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyMediaQueryModule
} from '@skyux/core';

import {
  Subject
} from 'rxjs';

import {
  StacheSidebarWrapperComponent
} from './sidebar-wrapper.component';

import {
  StacheSidebarModule
} from './sidebar.module';

import {
  StacheNavModule
} from '../nav/nav.module';

import {
  StacheNavService
} from '../nav/nav.service';

import {
  StacheWindowRef
} from '../shared/window-ref';

import {
  StacheRouteMetadataService
} from '../shared/route-metadata.service';

import {
  StacheRouteService
} from '../shared/route.service';

import {
  StacheOmnibarAdapterService
} from '../shared/omnibar-adapter.service';

import {
  RouterLinkStubDirective
} from './fixtures/router-link-stub.directive';

describe('StacheSidebarWrapperComponent', () => {
  const CONTAINER_SIDEBAR_CLASSNAME = 'stache-sidebar-enabled';
  let component: StacheSidebarWrapperComponent;
  let fixture: ComponentFixture<StacheSidebarWrapperComponent>;
  let mockElement: HTMLElement = document.createElement('div');
  let mockRouteService: any;
  let mockOmnibarService: any;
  let mockWindowRef: any;

  let activeUrl: string = '/';
  let windowWidth = 1000;
  let omnibarHeight = 50;

  class MockRouteService {
    public getActiveUrl() {
      return activeUrl;
    }

    public getActiveRoutes() {
      return [
        {
          name: 'Home',
          path: '',
          children: [
            {
              name: 'Test',
              path: '/test',
              children: [
                {
                  name: 'Test Child',
                  path: '/test/child'
                }
              ]
            }
          ]
        }
      ];
    }
  }

  class MockWindowRef {
    public nativeWindow = {
     innerWidth: windowWidth,
     document: {
       body: mockElement
      }
    };

    public onResizeStream = new Subject();
}

  class MockOmnibarService {
    public getHeight() {
      return omnibarHeight;
    }
  }

  beforeEach(() => {
    mockRouteService = new MockRouteService();
    mockOmnibarService = new MockOmnibarService();
    mockWindowRef = new MockWindowRef();

    TestBed.configureTestingModule({
      declarations: [
        RouterLinkStubDirective
      ],
      imports: [
        RouterTestingModule,
        StacheNavModule,
        StacheSidebarModule,
        SkyMediaQueryModule,
        SkyI18nModule
      ],
      providers: [
        StacheNavService,
        { provide: StacheWindowRef, useValue: mockWindowRef },
        { provide: StacheOmnibarAdapterService, useValue: mockOmnibarService },
        { provide: StacheRouteService, useValue: mockRouteService },
        { provide: StacheRouteMetadataService, useValue: { routes: [] } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StacheSidebarWrapperComponent);
    component = fixture.componentInstance;
    component.sidebarRoutes = mockRouteService.getActiveRoutes();
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });

  it('should open and close the sidebar', () => {
    component.sidebarOpen = false;
    component.toggleSidebar();
    expect(component.sidebarOpen).toEqual(true);
    component.toggleSidebar();
    expect(component.sidebarOpen).toEqual(false);
  });

  it('should call the check the window width on window resize', () => {
    component.sidebarOpen = false;
    mockWindowRef.nativeWindow.innerWidth = 10;
    mockWindowRef.onResizeStream.next();
    fixture.detectChanges();
    expect(component.sidebarOpen).toBe(false);
  });

  it('should be accessible', async(() => {
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement).toBeAccessible();
  }));

  it(`should add the class ${ CONTAINER_SIDEBAR_CLASSNAME } to the body if one exists`, () => {
    component.ngAfterViewInit();
    expect(mockElement.className).toContain(CONTAINER_SIDEBAR_CLASSNAME);
    mockElement.remove();
  });

  it(`should remove the class ${ CONTAINER_SIDEBAR_CLASSNAME } from the body on destroy`, () => {
    component.ngAfterViewInit();
    expect(mockElement.className).toContain(CONTAINER_SIDEBAR_CLASSNAME);
    component.ngOnDestroy();
    expect(mockElement.className).not.toContain(CONTAINER_SIDEBAR_CLASSNAME);
    mockElement.remove();
  });
});
