import {
  expect
} from '@skyux-sdk/testing';

import { StacheNavModule } from './nav.module';

describe('StacheNavModule', () => {
  it('should export', () => {
    const exportedModule = new StacheNavModule();
    expect(exportedModule).toBeDefined();
  });
});
