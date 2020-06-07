# kv4cf

A modified version of [`@cloudflare/kv-asset-handler`](https://www.npmjs.com/package/@cloudflare/kv-asset-handler), with Non-ASCII URL supported.

[![](https://img.shields.io/npm/v/kv4cf.svg?style=flat-square)](https://www.npmjs.com/package/kv4cf) ![](https://img.shields.io/npm/dt/kv4cf?style=flat-square) ![](https://img.shields.io/npm/l/kv4cf.svg?style=flat-square)


## Installation

```bash
npm uninstall @cloudflare/kv-asset-handler
npm install kv4cf
```

## Usage

Nearly exactly the same as `@cloudflare/kv-asset-handler`, so please refer to [its README](https://www.npmjs.com/package/@cloudflare/kv-asset-handler).

Only a few differences need to be noticed:

### Use CommonJS instead of ESModule

```javascript
// What you should do to import @cloudflare/kv-asset-handler
import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

// What you should do to import kv4cf
const { getAssetFromKV } = require('kv4cf');
```

### Custom Error handling

```javascript
const { getAssetFromKV } = require('kv4cf');
const { NotFoundError, MethodNotAllowedError, InternalError } = require('kv4cf/lib/error');

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event)
  } catch (e) {
    if (e instanceof NotFoundError) {
      // ...
    } else if (e instanceof MethodNotAllowedError) {
      // ...
    } else if (e instanceof InternalError) {
      // ...
    } else {
      // ...
    }
  }
}
```

## Author

**kv4cf** © [Sukka](https://github.com/SukkaW), Released under the [MIT](./LICENSE) License.

> [Personal Website](https://skk.moe) · [Blog](https://blog.skk.moe) · GitHub [@SukkaW](https://github.com/SukkaW) · Telegram Channel [@SukkaChannel](https://t.me/SukkaChannel) · Twitter [@isukkaw](https://twitter.com/isukkaw) · Keybase [@sukka](https://keybase.io/sukka)
