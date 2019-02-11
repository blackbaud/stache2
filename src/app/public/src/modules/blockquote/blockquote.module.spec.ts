import {
  expect
} from '@skyux-sdk/testing';

import { StacheBlockquoteModule } from './blockquote.module';

describe('StacheBlockquoteModule', () => {
  it('should export', () => {
    const exportedModule = new StacheBlockquoteModule();
    expect(exportedModule).toBeDefined();
  });
});
