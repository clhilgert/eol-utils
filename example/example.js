import { crlf, lf, cr } from '../src/index.js';

const str = '\rHello\nWorld\r\n';

console.log(crlf(str)); // --> '\r\nHello\r\nWorld\r\n'
console.log(lf(str)); // --> '\nHello\nWorld\n'
console.log(cr(str)); // --> '\rHello\rWorld\r'
