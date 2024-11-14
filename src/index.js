export const crlf = (s) =>
  typeof s !== 'string'
    ? (() => {
        throw new TypeError('crlf - Input must be a string');
      })()
    : s
        .replace(/\r(?!\n)/g, '\n')
        .replace(/\r\n/g, '\n')
        .replace(/\n/g, '\r\n');

export const cr = (s) =>
  typeof s !== 'string'
    ? (() => {
        throw new TypeError('cr - Input must be a string');
      })()
    : s.replace(/\r\n/g, '\r').replace(/\n/g, '\r').replace(/\r/g, '\r');

export const lf = (s) =>
  typeof s !== 'string'
    ? (() => {
        throw new TypeError('lf - Input must be a string');
      })()
    : s.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/\n/g, '\n');
