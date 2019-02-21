import { StachePageAnchorService } from './page-anchor.service';
import { StacheNavLink } from '../nav';
import { Observable, BehaviorSubject } from 'rxjs';
import { NavigationStart } from '@angular/router';

class MockRouter {
  public url = '/internal#element-id';
  public events = new BehaviorSubject({
    url: '/test'
  } as NavigationStart);
  public navigate = (path: any, extras: any) => true;
}

class MockWindowRef {
  private mockPageAnchors: StacheNavLink[] = [
    {
      name: 'test',
      path: '/'
    }
  ];

  public nativeWindow = {
    document: {
      querySelectorAll: jasmine.createSpy('querySelectorAll').and.callFake((id: any) => {
        return this.mockPageAnchors;
      }),
      body: {
        scrollHeight: 5
      }
    },
    addEventListener: (eventType: string, func: any) => {
      func();
    }
  };

  public testElement = {
    getBoundingClientRect() {
      return { y: 0 };
    }
  };
}

class MockRouteService {
  public getActiveUrl = () => '/test';
}

class MockNavService {
  public updateRoutesOnScroll = (pageAnchors: any) => true;
}

describe('PageAnchorService', () => {
  let service: StachePageAnchorService;
  let windowRef = new MockWindowRef();
  let router = new MockRouter();
  let routeService = new MockRouteService();
  let navService = new MockNavService();

  beforeEach(() => {
    service = new StachePageAnchorService(
      (windowRef as any),
      (router as any),
      (routeService as any),
      (navService as any)
    );
  });

  it('should update offset top on page height change, no page anchors', () => {
    spyOn(service['navService'], 'updateRoutesOnScroll');
    service['onScroll']();
    expect(service['navService'].updateRoutesOnScroll).toHaveBeenCalled();
  });

  it('should update offset top on page height change', () => {
    spyOn(service['navService'], 'updateRoutesOnScroll');
    service.pageAnchors = [
      {
        element: {
          offsetTop: 5
        }
      } as StacheNavLink
    ];
    service['onScroll']();
    expect(service.pageAnchors[0].offsetTop).toEqual(5);
    expect(service['navService'].updateRoutesOnScroll).toHaveBeenCalled();
  });

  it('should update offset top on page height change, constant height', () => {
    spyOn(service['navService'], 'updateRoutesOnScroll');
    service.pageAnchors = [
      {
        element: {
          offsetTop: 5
        }
      } as StacheNavLink
    ];
    service.currentBodyHeight.next(5);
    service['onScroll']();
    expect(service.pageAnchors[0].offsetTop).toEqual(undefined);
    expect(service['navService'].updateRoutesOnScroll).toHaveBeenCalled();
  });

  it('should navigate to a new page', () => {
    service['onNavigate'](new NavigationStart(0, '/test2#testFragment'));

    expect(service['currentPageUrl']).toEqual('/test2');
    expect(service.pageAnchors).toEqual([]);
    expect(service.currentBodyHeight.getValue()).toEqual(5);
  });

  it('should navigate, in page navigation', () => {
    service.pageAnchors = [{
      name: 'anchor'
    } as StacheNavLink ];
    service['onNavigate'](new NavigationStart(0, '/internal#testFragment'));

    expect(service['currentPageUrl']).toEqual('/internal');
    expect(service.pageAnchors.length).toEqual(1);
    expect(service.currentBodyHeight.getValue()).toEqual(0);
  });

  it('should generate anchor, with anchorId', () => {
    const element = {
      textContent: 'testContent',
      offsetTop: 5
    };

    const result = service.generateAnchor(element, 'testId');

    expect(result).toEqual({
      path: ['/test'],
      name: 'testContent',
      fragment: 'testId',
      offsetTop: 5,
      element: element
    } as StacheNavLink);

    expect(service.pageAnchors.length).toBe(1);
  });

  it('should generate anchor', () => {
    const element = {
      textContent: 'testContent',
      offsetTop: 5
    };

    const result = service.generateAnchor(element);

    expect(result).toEqual({
      path: ['/test'],
      name: 'testContent',
      fragment: 'testcontent',
      offsetTop: 5,
      element: element
    } as StacheNavLink);
    expect(service.pageAnchors.length).toBe(1);
  });

  it('should sort generated anchors', () => {
    const element = {
      textContent: 'testContent1',
      offsetTop: 5
    };

    const element1 = {
      textContent: 'testContent0',
      parentElement: {
        offsetTop: 1
      },
      offsetTop: 0
    };

    service.generateAnchor(element);

    expect(service.pageAnchors.length).toBe(1);

    service.generateAnchor(element1);

    expect(service.pageAnchors).toEqual([
      {
        path: ['/test'],
        name: 'testContent0',
        fragment: 'testcontent0',
        offsetTop: 1,
        element: element1
      } as StacheNavLink,
      {
        path: ['/test'],
        name: 'testContent1',
        fragment: 'testcontent1',
        offsetTop: 5,
        element: element
      } as StacheNavLink
    ]);
  });
});
