import { thingsThingsController } from '@test/other-things/things-things.controller';

describe('blaMapper', () => {
  it('should return the same string', () => {
    const bla = 'bla';
    const result = thingsThingsController();
    expect(result).toBe(bla);
  });
});