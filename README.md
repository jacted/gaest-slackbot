## Gaest.com slack integration

This is NOT a NodeJS package.

## What does it do?

Integrates with api.gaest.com 

## Examples

`Gaest vis 4 lokaler til 10 personer i København til 11500 kr side 1`

`Gaest vis 2 lokaler i Aarhus til 500 kr side 1`

`Gaest vis lokaler i Aarhus til 1500 kr`

## Usage

```
Limit: vis [0-9] (Default: 10)
Page: side [0-9] (Default: 1)
Min capacity: [0-9] person | [0-9] personer (Default: 0)
Price: [0-9] kr | [0-9]kr (Default: 1000000)
Location: Aarhus | København | Copenhagen
```

## Getting started slack

1. Clone repository

2. Use npm to install dependencies:

  ```
  npm install
  ```

3. Add Outgoing WebHook Integration to Slack ```https://my.slack.com/services/new/outgoing-webhook```

4. Slack WebHook url `http://localhost:8080/slack` - Add `Gaest` to trigger word(s)

5. Edit app/config.js

6. Run ```node index.js``` (or use something like pm2)

7. Use commands in any channel or the channel selected when creating webhook


## License
The MIT License (MIT)

Copyright (c) 2016 Jacob (Jacted)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.