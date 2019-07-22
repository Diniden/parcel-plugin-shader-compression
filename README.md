# Shader importer (Why?)

This is a plugin to simplify the process of importing shaders into the bundle as raw strings.

During development, a purely raw string is desired for the shader to make debugging easier to understand; however,
in production you will want comments and unecessary whitespace at the minimum to be removed.

This plugin does NOT do any intelligent parsing of the Shader language, it merely uses the standard definition of single
and multiline comments to determine text that should be removed.

# How to use

```
npm install -DE github:diniden/parcel-plugin-shader-compression
```

Then in your package.json set a property titled "shader":

```
"shader": [
  "<your file extension>",
  "<your file extension>",
  fs, vs, doc, etc
]
```

Now in your project:

```
const hey = require("../foo.fs");
console.log(hey); // Contents of foo.fs
```

There is no additional configuration considerations for this project (separate config files, webpack configs, etc etc).
I am very intentionally keeping it in package.json as I believe in the movement of clearing out configurations from root
project folders.
