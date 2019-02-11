import {
  expect
} from '@skyux-sdk/testing';

import { StacheEditButtonModule } from './edit-button.module';

describe('StacheEditButtonModule', () => {
  it('should export', () => {
    const exportedModule = new StacheEditButtonModule();
    expect(exportedModule).toBeDefined();
  });
});
