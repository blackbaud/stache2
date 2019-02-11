import {
  expect
} from '@skyux-sdk/testing';

import { StacheFooterModule } from './footer.module';

describe('StacheFootertModule', () => {
  it('should export', () => {
    const exportedModule = new StacheFooterModule();
    expect(exportedModule).toBeDefined();
  });
});
