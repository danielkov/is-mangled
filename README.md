# isMangled
A simple one-liner to help determine whether the code you're executing had been minified or not.
___

## Usage example

```js
import isMangled from 'is-mangled'

let isProduction = false

if (isMangled()) {
    isProduction = true
}
```
Note that this is not a completely foolproof way of determining whether the code had been concatenated or otherwise altered. Some algorythms do not minify code this way, which means you should always test before relying on this function.

## Installing

Install with `npm i -S is-mangled` or if you're even cooler, use yarn: `yarn add is-mangled`.