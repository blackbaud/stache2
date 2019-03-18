import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';
import { StacheTableOfContentsComponent } from './table-of-contents.component';
import { StacheNavLink } from '../nav';
import { StacheWindowRef, StacheOmnibarAdapterService } from '../shared';
import { BehaviorSubject } from 'rxjs';
import { StachePageAnchorService } from '../page-anchor';

class MockWindowService {
  public testElement = {
    offsetTop: 20,
    getBoundingClientRect() {
      return {
        y: 0,
        bottom: 0
      };
    },
    scrollIntoView() {
      return;
    }
  };

  public nativeWindow = {
    pageYOffset: 0,
    innerHeight: 0,
    document: {
      getElementById: jasmine.createSpy('getElementById').and.callFake((id: any) => {
        if (id === 'element-id') {
          return this.testElement;
        }
        return false;
      }),
      querySelector: jasmine.createSpy('querySelector').and.callFake((selector: any) => {
        return this.testElement;
      }),
      documentElement: this.testElement
    },
    location: {
      href: ''
    },
    scroll: jasmine.createSpy('scroll')
  };
}

class MockOmnibarService {
 public getHeight = () => 50;
}

class MockPageAnchorService {
  public pageAnchors = new BehaviorSubject([]);
}

describe('StacheTableOfContentsComponent', () => {
  let component: StacheTableOfContentsComponent;
  let fixture: ComponentFixture<StacheTableOfContentsComponent>;
  let windowRef: any;
  let mockOmnibarService: any;
  let mockPageAnchorService: any;

  const route: StacheNavLink = {
    name: 'string',
    path: '/test',
    offsetTop: 100,
    isCurrent: false
  };

  beforeEach(() => {
    windowRef = new MockWindowService();
    mockOmnibarService = new MockOmnibarService();
    mockPageAnchorService = new MockPageAnchorService();

    TestBed.configureTestingModule({
      declarations: [
        StacheTableOfContentsComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: StacheWindowRef, useValue: windowRef },
        { provide: StacheOmnibarAdapterService, useValue: mockOmnibarService },
        { provide: StachePageAnchorService, useValue: mockPageAnchorService }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StacheTableOfContentsComponent);
    component = fixture.componentInstance;
    component.routes = [route];
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });

  it('should update routes on scroll, undefined routes', () => {
    spyOn(component, 'updateView');
    component.updateRoutesOnScroll(undefined);
    expect(component.updateView).not.toHaveBeenCalled();
  });

  it('should update routes on scroll, no routes', () => {
    spyOn(component, 'updateView');
    component.updateRoutesOnScroll([]);
    expect(component.updateView).not.toHaveBeenCalled();
  });

  it('should update routes on scroll', () => {
    spyOn(component, 'updateView');
    component.updateRoutesOnScroll([new BehaviorSubject([
      {
        name: 'testRoute',
        path: [],
        offsetTop: 0
      } as StacheNavLink
    ])]);
    expect(component.updateView).toHaveBeenCalled();
  });

  it('should update the view', () => {
    const routes = [
      new BehaviorSubject({
        name: 'testRoute',
        path: [],
        offsetTop: 0
      } as StacheNavLink)
    ];

    component.updateView(routes);

    expect(routes[0].getValue().isCurrent).toBeTruthy();
    expect(component['documentBottom']).toBe(0);
  });

  it('should update the view, no stache wrapper', () => {
    const test: any = undefined;
    windowRef = {
      testElement: test,
      nativeWindow: {
        pageYOffset: 0,
        innerHeight: 0,
        document: {
          getElementById: jasmine.createSpy('getElementById').and.callFake((id: any) => {
            if (id === 'element-id') {
              return test;
            }
            return false;
          }),
          querySelector: jasmine.createSpy('querySelector').and.callFake((selector: any) => {
            return test;
          }),
          documentElement: {
            offsetTop: 20,
            getBoundingClientRect() {
              return {
                y: 0,
                bottom: 0
              };
            },
            scrollIntoView() {
              return;
            }
          }
        },
        location: {
          href: ''
        },
        scroll: jasmine.createSpy('scroll')
      }
    };

    component = new StacheTableOfContentsComponent(windowRef as any, mockOmnibarService as any, mockPageAnchorService as any);

    const routes = [
      new BehaviorSubject({
        name: 'testRoute',
        path: [],
        offsetTop: 0
      } as StacheNavLink)
    ];

    component.updateView(routes);

    expect(component['headerHeight']).toBe(undefined);
    expect(routes[0].getValue().isCurrent).toBeTruthy();
  });

  it('should update the view, first route is current', () => {
    const test = {
      offsetTop: 20,
      getBoundingClientRect() {
        return {
          y: 0,
          bottom: 150
        };
      },
      scrollIntoView() {
        return;
      }
    };
    windowRef = {
      testElement: test,
      nativeWindow: {
        pageYOffset: 0,
        innerHeight: 0,
        document: {
          getElementById: jasmine.createSpy('getElementById').and.callFake((id: any) => {
            if (id === 'element-id') {
              return test;
            }
            return false;
          }),
          querySelector: jasmine.createSpy('querySelector').and.callFake((selector: any) => {
            return test;
          }),
          documentElement: test
        },
        location: {
          href: ''
        },
        scroll: jasmine.createSpy('scroll')
      }
    };

    component = new StacheTableOfContentsComponent(windowRef as any, mockOmnibarService as any, mockPageAnchorService as any);

    const routes = [
      new BehaviorSubject({
        name: 'testRoute0',
        path: [],
        offsetTop: 10
      } as StacheNavLink),
      new BehaviorSubject({
        name: 'testRoute1',
        path: [],
        offsetTop: 100
      } as StacheNavLink)
    ];

    component.updateView(routes);

    expect(routes[0].getValue().isCurrent).toBeTruthy();
    expect(routes[1].getValue().isCurrent).not.toBeTruthy();
  });
});
