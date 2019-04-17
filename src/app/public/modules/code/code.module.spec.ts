import {
  expect
} from '@skyux-sdk/testing';

import { StacheCodeModule } from './code.module';

describe('StacheCodeModule', () => {
  it('should export', () => {
    const exportedModule = new StacheCodeModule();
    expect(exportedModule).toBeDefined();
  });
});
