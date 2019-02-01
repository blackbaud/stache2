import { StachePageAnchorService } from './page-anchor.service';
import { StacheNavLink } from '../nav';

class MockRouter {
  public url = '/internal#element-id';
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
        scrollHeight: 0
      }
    }
  };

  public testElement = {
    getBoundingClientRect() {
      return { y: 0 };
    }
  };
}

describe('StacheTableOfContentsService', () => {
  let tocService: StachePageAnchorService;
  let windowRef = new MockWindowRef();
  let router = new MockRouter();

  beforeEach(() => {
    tocService = new StachePageAnchorService((router as any), (windowRef as any));
  });

  it('should reset anchor list on route change', () => {
    tocService.pageAnchors = [ { name: 'test' } ];
    tocService.updatePageAnchorsOnScroll();
    expect(tocService.pageAnchors.length).toBe(0);
  });
});
