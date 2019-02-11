import {
  expect
} from '@skyux-sdk/testing';

import { StacheBackToTopModule } from './back-to-top.module';

describe('StacheBackToTopModule', () => {
  it('should export', () => {
    const exportedModule = new StacheBackToTopModule();
    expect(exportedModule).toBeDefined();
  });
});
