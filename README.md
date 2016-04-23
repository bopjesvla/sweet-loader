# sweet-loader

A webpack loader for sweet.js 1.x

## Usage

```js
module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      loader: 'sweet?noBabel'
    }]
  }
};
```
