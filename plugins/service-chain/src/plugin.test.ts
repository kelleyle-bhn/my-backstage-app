import { serviceChainPlugin } from './plugin';

describe('service-chain', () => {
  it('should export plugin', () => {
    expect(serviceChainPlugin).toBeDefined();
  });
});
