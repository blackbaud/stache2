import {
  expect
} from '@skyux-sdk/testing';

import { StacheBreadcrumbsModule } from './breadcrumbs.module';

describe('StacheBreadcrumbsModule', () => {
  it('should export', () => {
    const exportedModule = new StacheBreadcrumbsModule();
    expect(exportedModule).toBeDefined();
  });
});
