import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';
import { StachePageAnchorComponent } from './page-anchor.component';
import { StachePageAnchorService } from './page-anchor.service';
import { StacheWindowRef } from '../shared';

describe('StachePageAnchorComponent', () => {
  let component: StachePageAnchorComponent;
  let fixture: ComponentFixture<StachePageAnchorComponent>;
  let mockWindowService: any;
  let mockAnchorService: any;
  let mockElementRef: any;

  let mockPageAnchors = [
    {
      id: 'test-content'
    }
  ];

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

  class MockElementRef {
    public nativeElement = {};
  }

  beforeEach(() => {
    mockWindowService = new MockWindowService();
    mockAnchorService = new MockAnchorService();
    mockElementRef = new MockElementRef();

    TestBed.configureTestingModule({
      declarations: [
        StachePageAnchorComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: ElementRef, useValue: mockElementRef},
        { provide: StacheWindowRef, useValue: mockWindowService },
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

  it('should scroll to anchor', () => {
    component.scrollToAnchor();
    expect(component['windowRef'].nativeWindow.document.querySelector).toHaveBeenCalled();
  });

  it('should populate data after view init', () => {
    component.ngAfterViewInit();
    expect(component.name).toEqual('Test Content');
    expect(component.fragment).toEqual('test-content');
    expect(component.path).toEqual([]);
  });
});
