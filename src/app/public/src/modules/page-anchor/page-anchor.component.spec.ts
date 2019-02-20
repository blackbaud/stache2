import { ChangeDetectorRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';

import { StachePageAnchorComponent } from './page-anchor.component';
import { StachePageAnchorService } from './page-anchor.service';

import { StacheWindowRef, StacheRouteService } from '../shared';

describe('StachePageAnchorComponent', () => {
  let component: StachePageAnchorComponent;
  let fixture: ComponentFixture<StachePageAnchorComponent>;
  let mockRouteService: any;
  let mockWindowService: any;
  let mockAnchorService: any;

  let activeUrl: string = '/';

  let mockPageAnchors = [
    {
      id: 'test-content'
    }
  ];

  class MockRouteService {
    public getActiveUrl() {
      return activeUrl;
    }
  }

  class MockAnchorService {
    public generateAnchor = jasmine.createSpy('generateAnchor').and.returnValue({
      name: 'Test Content',
      fragment: 'test-content',
      path: []
    });
  }

  class MockWindowService {
    public nativeWindow = {
      document: {
        querySelector: jasmine.createSpy('querySelector').and.callFake((fragment: any) => {
            return this.testElement;
          }),
          querySelectorAll: jasmine.createSpy('querySelectorAll').and.callFake(() => {
            return mockPageAnchors;
          })
      },
      location: {
        href: ''
      }
    };

    public testElement = {
      scrollIntoView: jasmine.createSpy('scrollIntoView').and.callFake(() => {})
    };
  }

  beforeEach(() => {
    mockWindowService = new MockWindowService();
    mockRouteService = new MockRouteService();
    mockAnchorService = new MockAnchorService();

    TestBed.configureTestingModule({
      declarations: [
        StachePageAnchorComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: StacheWindowRef, useValue: mockWindowService },
        { provide: StacheRouteService, useValue: mockRouteService },
        { provide: StachePageAnchorService, useValue: mockAnchorService },
        ChangeDetectorRef
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StachePageAnchorComponent);
    component = fixture.componentInstance;
    spyOn(component['cdr'], 'detectChanges').and.callFake(() => {});
    fixture.debugElement.nativeElement.textContent = 'Test Content';
  });

  it('should add the name from the element text content', () => {
    component.ngAfterViewInit();
    fixture.detectChanges();
    expect(component.name).toBe('Test Content');
  });

  it('should add the fragment from the component name', () => {
    component.ngAfterViewInit();
    fixture.detectChanges();
    expect(component.fragment).toBe('test-content');
  });

  it('should register the page anchor with the page anchor service', () => {
    component.ngAfterViewInit();
    expect(mockAnchorService.generateAnchor).toHaveBeenCalled();
  });

  it('scroll to anchor should call the elements scroll to anchor method', () => {
    component.scrollToAnchor();
    expect(mockWindowService.testElement.scrollIntoView).toHaveBeenCalled();
  });
});
