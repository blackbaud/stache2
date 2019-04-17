import {
  expect
} from '@skyux-sdk/testing';

import { StacheTableOfContentsModule } from './table-of-contents.module';

describe('StacheTableOfContentsModule', () => {
  it('should export', () => {
    const exportedModule = new StacheTableOfContentsModule();
    expect(exportedModule).toBeDefined();
  });
});
