import {
  expect
} from '@skyux-sdk/testing';

import { StacheCodeBlockModule } from './code-block.module';

describe('StacheCodeBlockModule', () => {
  it('should export', () => {
    const exportedModule = new StacheCodeBlockModule();
    expect(exportedModule).toBeDefined();
  });
});
