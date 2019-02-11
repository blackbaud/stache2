import {
  expect
} from '@skyux-sdk/testing';

import { StacheLayoutModule } from './layout.module';

describe('StacheLayoutModule', () => {
  it('should export', () => {
    const exportedModule = new StacheLayoutModule();
    expect(exportedModule).toBeDefined();
  });
});
