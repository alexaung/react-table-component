import {
  generateKey,
} from './utils';

describe('#Utils', () => {
  describe('#generateKey function', () => {
    it('should return key', () => {
      expect(generateKey('tr', 'testdata', 3)).toBe('tr-testdata-3');
    });
    it('should return key without spaces', () => {
      expect(generateKey('tr', 'test data', 3)).toBe('tr-testdata-3');
    });
  });
});
