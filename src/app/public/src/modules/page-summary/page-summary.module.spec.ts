import {
  expect
} from '@skyux-sdk/testing';

import { StachePageSummaryModule } from './page-summary.module';

describe('StachePageSummaryModule', () => {
  it('should export', () => {
    const exportedModule = new StachePageSummaryModule();
    expect(exportedModule).toBeDefined();
  });
});
