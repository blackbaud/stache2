import {
  expect
} from '@skyux-sdk/testing';

import { StacheLinkModule } from './link.module';

describe('StacheLinkModule', () => {
  it('should export', () => {
    const exportedModule = new StacheLinkModule();
    expect(exportedModule).toBeDefined();
  });
});
