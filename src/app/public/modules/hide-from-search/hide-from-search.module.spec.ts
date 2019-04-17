import {
  expect
} from '@skyux-sdk/testing';

import { StacheHideFromSearchModule } from './hide-from-search.module';

describe('StacheHideFromSearchModule', () => {
  it('should export', () => {
    const exportedModule = new StacheHideFromSearchModule();
    expect(exportedModule).toBeDefined();
  });
});
