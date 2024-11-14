# eol-utils

Easy-to-use regex functions to format line breaks as Carriage Return Line Feed _CR LF_ (Windows), Line Feed _LF_ (Unix) and Carriage Return _CR_ (Mac OS <= 9).

## Installation

```sh
npm i eol-utils
```

## Usage

Import the desired function(s) and pass in a string to normalize its line breaks.

```javascript
import { crlf, lf, cr } from 'eol-utils';

let str = '\rHello\nWorld\r\n';

console.log(crlf(str)); // --> '\r\nHello\r\nWorld\r\n'
console.log(lf(str)); // --> '\nHello\nWorld\n'
console.log(cr(str)); // --> '\rHello\rWorld\r'
```

## Contributing

Contributions welcome.

## License

The MIT License (MIT) 2024 - clhilgert. Please refer to LICENSE for more details.
