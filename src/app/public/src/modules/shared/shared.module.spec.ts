import {
  expect
} from '@skyux-sdk/testing';

import { StacheSharedModule } from './shared.module';

describe('StacheSharedModule', () => {
  it('should export', () => {
    const exportedModule = new StacheSharedModule();
    expect(exportedModule).toBeDefined();
  });
});
