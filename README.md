# Shader importer (Why?)

This is a plugin to simplify the process of importing shaders into the bundle as raw strings.

During development, a purely raw string is desired for the shader to make debugging easier to understand; however,
in production you will want comments and unecessary whitespace at the minimum to be removed.

This plugin does NOT do any intelligent parsing of the Shader language, it merely uses the standard definition of single
and multiline comments to determine text that should be removed.

# How to use

```sh
npm install -DE github:diniden/parcel-plugin-shader-compression
```

## Raw shader string copy

Then in your package.json set a property titled "shader":

```json
"shader": {
  "ext": [
    "<your file extension>",
    "<your file extension>",
    "fs", "vs", "doc", "etc"
  ]
}
```

Now in your project:

```javascript
const hey = require("../foo.fs");
console.log(hey); // Contents of foo.fs
```

## Compressed shader string copy

To compress shader assets you configured to be copied over:

```javascript
process.env.NODE_ENV = 'production';
```

OR

```json
"shader": {
  "compress": true,
  "ext": [
    "<your file extension>",
    "<your file extension>",
    "fs", "vs", "doc", "etc"
  ]
}
```

There are no additional configuration considerations for this project (separate config files, webpack configs, etc etc).
I am very intentionally keeping it in package.json as I believe in the movement of clearing out configurations from root
project folders.

## Configuration properties

- ext {string[]} A list of file extensions you want loaded as raw shader strings.
- compress {boolean} Set to true to FORCE the compression to happen regardless if the NODE_ENV is in production  or not.
