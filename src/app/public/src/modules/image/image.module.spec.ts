import {
  expect
} from '@skyux-sdk/testing';

import { StacheImageModule } from './image.module';

describe('StacheImageModule', () => {
  it('should export', () => {
    const exportedModule = new StacheImageModule();
    expect(exportedModule).toBeDefined();
  });
});
