import {
  expect
} from '@skyux-sdk/testing';

import { StacheTutorialStepModule } from './tutorial-step.module';

describe('StacheTutorialStepModule', () => {
  it('should export', () => {
    const exportedModule = new StacheTutorialStepModule();
    expect(exportedModule).toBeDefined();
  });
});
