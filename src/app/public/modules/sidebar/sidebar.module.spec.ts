import {
  expect
} from '@skyux-sdk/testing';

import { StacheSidebarModule } from './sidebar.module';

describe('StacheSidebarModule', () => {
  it('should export', () => {
    const exportedModule = new StacheSidebarModule();
    expect(exportedModule).toBeDefined();
  });
});
