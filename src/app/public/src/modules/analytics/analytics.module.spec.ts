import {
  expect
} from '@skyux-sdk/testing';

import { StacheAnalyticsModule } from './analytics.module';

describe('StacheAnalyticsModule', () => {
  it('should export', () => {
    const exportedModule = new StacheAnalyticsModule();
    expect(exportedModule).toBeDefined();
  });
});
