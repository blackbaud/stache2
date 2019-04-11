import {
  expect
} from '@skyux-sdk/testing';

import { StacheVideoModule } from './video.module';

describe('StacheVideoModule', () => {
  it('should export', () => {
    const exportedModule = new StacheVideoModule();
    expect(exportedModule).toBeDefined();
  });
});
