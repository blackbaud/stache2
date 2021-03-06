import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { SkyModule } from '@blackbaud/skyux/dist/core';
import { expect } from '@blackbaud/skyux-lib-testing';
import { StacheWindowRef, StacheRouteService } from '../shared';

import { StacheGridModule } from '../grid';
import { StacheActionButtonsComponent } from './action-buttons.component';
import { StacheLinkModule } from '../link';

describe('StacheActionButtonsComponent', () => {
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
  let mockRouteService: MockRouteService;

  beforeEach(() => {
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
        { provide: StacheRouteService, useValue: mockRouteService }
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

    spyOn(component, 'searchApplied');
    component.onKeyUp({
      target: { value: 'Test' }
    } as any);
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

  it('should pass accessibility', async(() => {
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
    expect(fixture.debugElement.nativeElement).toBeAccessible();
  }));
});
