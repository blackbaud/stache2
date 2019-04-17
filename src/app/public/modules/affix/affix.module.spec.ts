import {
  expect
} from '@skyux-sdk/testing';

import { StacheAffixModule } from './affix.module';

describe('StacheAffixModule', () => {
  it('should export', () => {
    const exportedModule = new StacheAffixModule();
    expect(exportedModule).toBeDefined();
  });
});
