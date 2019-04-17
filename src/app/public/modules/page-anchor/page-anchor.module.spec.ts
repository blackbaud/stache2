import {
  expect
} from '@skyux-sdk/testing';

import { StachePageAnchorModule } from './page-anchor.module';

describe('StachePageAnchorModule', () => {
  it('should export', () => {
    const exportedModule = new StachePageAnchorModule();
    expect(exportedModule).toBeDefined();
  });
});
