import { expect } from '@skyux-sdk/testing';

import { StacheInternalModule } from './internal.module';

describe('StacheInternalModule', () => {
  it('should export', () => {
    const exportedModule = new StacheInternalModule();
    expect(exportedModule).toBeDefined();
  });
});
