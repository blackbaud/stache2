import {
  expect
} from '@skyux-sdk/testing';

import { StachePageHeaderModule } from './page-header.module';

describe('StachePageHeaderModule', () => {
  it('should export', () => {
    const exportedModule = new StachePageHeaderModule();
    expect(exportedModule).toBeDefined();
  });
});
