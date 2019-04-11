import {
  expect
} from '@skyux-sdk/testing';

import { StacheMarkdownModule } from './markdown.module';

describe('StacheMarkdownModule', () => {
  it('should export', () => {
    const exportedModule = new StacheMarkdownModule();
    expect(exportedModule).toBeDefined();
  });
});
