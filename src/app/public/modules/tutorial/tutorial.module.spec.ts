import {
  expect
} from '@skyux-sdk/testing';

import { StacheTutorialModule } from './tutorial.module';

describe('StacheTutorialModule', () => {
  it('should export', () => {
    const exportedModule = new StacheTutorialModule();
    expect(exportedModule).toBeDefined();
  });
});
