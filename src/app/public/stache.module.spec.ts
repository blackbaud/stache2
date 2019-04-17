import {
  expect
} from '@skyux-sdk/testing';

import { StacheModule } from './stache.module';

describe('StacheModule', () => {
  it('should export', () => {
    const exportedModule = new StacheModule();
    expect(exportedModule).toBeDefined();
  });
});
