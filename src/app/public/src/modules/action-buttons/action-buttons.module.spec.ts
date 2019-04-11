import {
  expect
} from '@skyux-sdk/testing';

import { StacheActionButtonsModule } from './action-buttons.module';

describe('StacheActionButtonsModule', () => {
  it('should export', () => {
    const exportedModule = new StacheActionButtonsModule();
    expect(exportedModule).toBeDefined();
  });
});
