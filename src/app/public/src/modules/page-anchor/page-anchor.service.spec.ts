import { StachePageAnchorService } from './page-anchor.service';
import { StacheNavLink } from '../nav';
import { Observable } from 'rxjs';
import { NavigationStart } from '@angular/router';

class MockRouter {
  public url = '/internal#element-id';
  public events = Observable.of({
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
    addEventListener: (eventType: string, func: Function) => {
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
  public updateRoutesOnScroll = () => true;
}

fdescribe('PageAnchorService', () => {
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

  it('should update offset top on page height change', () => {
    window.scrollBy(0, 1);

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

    console.log(service.pageAnchors);
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
