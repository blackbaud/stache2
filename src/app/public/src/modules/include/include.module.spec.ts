import {
  expect
} from '@skyux-sdk/testing';

import { StacheIncludeModule } from './include.module';

describe('StacheIncludeModule', () => {
  it('should export', () => {
    const exportedModule = new StacheIncludeModule();
    expect(exportedModule).toBeDefined();
  });
});
