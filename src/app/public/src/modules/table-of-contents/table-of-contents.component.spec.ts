import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';
import { StacheTableOfContentsComponent } from './table-of-contents.component';
import { StacheWindowRef } from '../shared';
import { StacheNavLink } from '../nav';

describe('StacheTableOfContentsComponent', () => {
  let component: StacheTableOfContentsComponent;
  let fixture: ComponentFixture<StacheTableOfContentsComponent>;
  let mockWindowService: any;

  class MockWindowService {
    public nativeWindow = {
      document: {
        documentElement: {
          getBoundingClientRect: () => {
            return { bottom: 100 };
          },
          querySelector: () => {
            return this.testElement;
          }
        },
        querySelectorAll: () => {
          return this.testElements;
        },
        body: {
          scrollHeight: 100
        }
      },
      innerHeight: 100,
      pageYOffset: 400
    };

    public testElement = {
      offsetTop: 100
    };

    public testElements = [
      { offsetTop: 100 },
      { offsetTop: 120 },
      { offsetTop: 140 }
    ];
  }

  const route: StacheNavLink = {
    name: 'string',
    path: '/test',
    offsetTop: 100,
    isCurrent: false
  };

  beforeEach(() => {
    mockWindowService = new MockWindowService();

    TestBed.configureTestingModule({
      declarations: [
        StacheTableOfContentsComponent
      ],
      imports: [
        RouterTestingModule
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        { provide: StacheWindowRef, useValue: mockWindowService }
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

  it('should scroll, route offset <= page offset', () => {
    mockWindowService.nativeWindow.innerHeight = undefined;
    component.ngAfterViewInit();
    component.onScroll();
    expect(component['activeRoute']).toEqual(route);

    mockWindowService.nativeWindow.innerHeight = 100;
  });

  it('should scroll, multiple routes', () => {
    component.routes.push({
      name: 'any',
      path: '/test2',
      offsetTop: 200,
      isCurrent: false
    });
    component.onScroll();
    expect(component['documentBottom']).toEqual(100);
    expect(component['window'].innerHeight).toEqual(100);
    expect(component['activeRoute']).toEqual(component.routes[1]);
    expect(component.routes[1].isCurrent).toBeTruthy();
  });

  it('should scroll, end of page', () => {
    component.onScroll();
    expect(component['documentBottom']).toEqual(100);
    expect(component['window'].innerHeight).toEqual(100);
    expect(component['activeRoute']).toEqual(route);
    expect(route.isCurrent).toBeTruthy();
  });

  it('should get valid offsetTop, element has valid offset', () => {
    const testElement = {
      offsetTop: 30
    };

    const result = component['getValidOffsetTop'](testElement);

    expect(result).toBe(30);
  });

  it('should get valid offsetTop, parent has valid offset', () => {
    const testElement = {
      offsetTop: 0,
      parentElement: {
        offsetTop: 30
      }
    };

    const result = component['getValidOffsetTop'](testElement);

    expect(result).toBe(30);
  });

  // How to best handle this? We need a solution to break out of infinite recursion
  // Note: this would likely never happen in practice, but luck favors the prepared
  it('should get invalid offsetTop, parent does not exist', () => {
    const testElement = {
      offsetTop: 0
    };

    const result = component['getValidOffsetTop'](testElement);

    expect(result).toBe(0);
  });

  const route2: StacheNavLink = {
    name: 'string',
    path: '/test',
    offsetTop: 100,
    isCurrent: false
  };

  const route3: StacheNavLink = {
    name: 'string',
    path: '/test',
    offsetTop: 100,
    isCurrent: false
  };

  it('should calculate page anchor locations on load', () => {
    component.routes.push(route2);
    component.routes.push(route3);

    component['calculatePageAnchorLocations']();
    const routeOffsets = component.routes.map(r => r.offsetTop);

    expect(routeOffsets.length).toBe(3);
    expect(routeOffsets[0]).toBe(100);
    expect(routeOffsets[1]).toBe(120);
    expect(routeOffsets[2]).toBe(140);

    component.routes = Array.of(component.routes[0]);
  });

  it('page anchors only update when body height changes', () => {
    spyOn<any>(component, 'getValidOffsetTop').and.callThrough();

    mockWindowService.nativeWindow.document.body.scrollHeight = 200;
    component['calculatePageAnchorLocations']();
    component['calculatePageAnchorLocations']();

    const result = component['getValidOffsetTop'] as any;
    expect(result.calls.count()).toBe(1);
  });
});
