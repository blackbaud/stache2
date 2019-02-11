import {
  expect
} from '@skyux-sdk/testing';

import { StacheWrapperModule } from './wrapper.module';

describe('StacheWrapperModule', () => {
  it('should export', () => {
    const exportedModule = new StacheWrapperModule();
    expect(exportedModule).toBeDefined();
  });
});
