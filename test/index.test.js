import { crlf, cr, lf } from '../src';

describe('index', () => {
  describe('crlf', () => {
    it('should fail if input is not string', () => {
      expect(() => crlf()).toThrow('crlf - Input must be a string');
    });
    it('should replace cr with crlf', () => {
      expect(crlf('line1\rline2')).toEqual('line1\r\nline2');
    });
    it('should replace lf with crlf', () => {
      expect(crlf('line1\nline2')).toEqual('line1\r\nline2');
    });
    it('should replace crlf with crlf', () => {
      expect(crlf('line1\r\nline2')).toEqual('line1\r\nline2');
    });
    it('should handle combined cases', () => {
      expect(crlf('line1\r\nline2\rline3\n')).toEqual(
        'line1\r\nline2\r\nline3\r\n'
      );
    });
  });
  describe('cr', () => {
    it('should fail if input is not string', () => {
      expect(() => cr()).toThrow('cr - Input must be a string');
    });
    it('should replace cr with cr', () => {
      expect(cr('line1\rline2')).toEqual('line1\rline2');
    });
    it('should replace lf with cr', () => {
      expect(cr('Hello\nWorld')).toEqual('Hello\rWorld');
    });
    it('should replace crlf with cr', () => {
      expect(cr('line1\r\nline2')).toEqual('line1\rline2');
    });
    it('should handle combined cases', () => {
      expect(cr('line1\r\nline2\rline3\n')).toEqual('line1\rline2\rline3\r');
    });
  });
  describe('lf', () => {
    it('should fail if input is not string', () => {
      expect(() => lf()).toThrow('lf - Input must be a string');
    });
    it('should replace cr with lf', () => {
      expect(lf('line1\rline2')).toEqual('line1\nline2');
    });
    it('should replace lf with lf', () => {
      expect(lf('Hello\nWorld')).toEqual('Hello\nWorld');
    });
    it('should replace crlf with lf', () => {
      expect(lf('line1\r\nline2')).toEqual('line1\nline2');
    });
    it('should handle combined cases', () => {
      expect(lf('line1\r\nline2\rline3\n')).toEqual('line1\nline2\nline3\n');
    });
  });
});
