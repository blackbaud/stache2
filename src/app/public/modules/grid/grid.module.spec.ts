import {
  expect
} from '@skyux-sdk/testing';

import { StacheGridModule } from './grid.module';

describe('StacheGridModule', () => {
  it('should export', () => {
    const exportedModule = new StacheGridModule();
    expect(exportedModule).toBeDefined();
  });
});
