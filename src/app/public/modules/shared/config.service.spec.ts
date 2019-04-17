import { StacheConfigService } from '../shared/config.service';

describe('StacheConfigService', () => {
  it('should return configuration', () => {
    const configService = new StacheConfigService();
    expect(configService.skyux.app.title).toBe('');
  });
});
