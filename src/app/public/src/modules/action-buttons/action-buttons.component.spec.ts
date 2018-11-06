import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { SkyModule } from '@blackbaud/skyux/dist/core';
import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';
import { StacheWindowRef, StacheRouteService } from '../shared';

import { StacheGridModule } from '../grid';
import { StacheActionButtonsComponent } from './action-buttons.component';
import { StacheNavService } from '../nav';
import { StacheLinkModule } from '../link';

describe('StacheActionButtonsComponent', () => {
  class MockNavService {
    public isExternal = jasmine.createSpy('isExternal').and.callFake(() => false);
  }

  let mockActiveUrl = '';
  let mockRoutes = [
    {
      path: '',
      children: [
        {
          path: 'parent',
          children: [
            {
              path: 'parent/child',
              children: [
                {
                  path: 'parent/child/grandchild'
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  class MockRouteService {
    public getActiveRoutes() {
      return mockRoutes;
    }
    public getActiveUrl() {
      return mockActiveUrl;
    }
  }

  let component: StacheActionButtonsComponent;
  let fixture: ComponentFixture<StacheActionButtonsComponent>;
  let mockNavService: MockNavService;
  let mockRouteService: MockRouteService;

  beforeEach(() => {
    mockNavService = new MockNavService();
    TestBed.configureTestingModule({
      imports: [
        SkyModule,
        StacheGridModule,
        RouterTestingModule,
        StacheLinkModule
      ],
      declarations: [
        StacheActionButtonsComponent
      ],
      providers: [
        StacheWindowRef,
        { provide: StacheRouteService, useValue: mockRouteService },
        { provide: StacheNavService, useValue: mockNavService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StacheActionButtonsComponent);
    component = fixture.componentInstance;
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });

  it('should display action buttons', () => {
    component.routes = [{
      name: 'Test',
      icon: 'fa-circle',
      summary: '',
      path: []
    }];

    fixture.detectChanges();
    const actionButtons = fixture.debugElement.queryAll(By.css('.sky-action-button'));

    expect(actionButtons.length).toBe(1);
  });

  it('should pass the value of the search input to searchApplied on key up', () => {
    component.routes = [{
      name: 'Test',
      icon: 'fa-circle',
      summary: '',
      path: []
    }];

    const e = Object.assign({ target: { value: 'Test' } }, new KeyboardEvent('keyup'));
    spyOn(component, 'searchApplied');
    component.onKeyUp(e);
    fixture.detectChanges();

    expect(component.searchApplied).toHaveBeenCalledWith('Test');
  });

  it('should filter out the buttons that do not meet the search criteria', () => {
    component.routes = [
      {
        name: 'Test',
        path: '/'
      },
      {
        name: 'Different',
        path: '/'
      },
      {
        name: 'Still good',
        path: '/',
        summary: 'Test'
      }
    ];
    fixture.detectChanges();
    component.searchApplied('Test');
    fixture.detectChanges();

    expect(component.filteredRoutes.length).toBe(2);
  });

  it('should return all routes if no search text is passed in', () => {
    component.routes = [
      {
        name: 'Test',
        path: '/'
      },
      {
        name: 'Different',
        path: '/'
      },
      {
        name: 'Still good',
        path: '/',
        summary: 'Test'
      }
    ];
    fixture.detectChanges();
    component.searchApplied('');
    fixture.detectChanges();

    expect(component.filteredRoutes.length).toBe(3);
  });
});
