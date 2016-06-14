
This Babel plugin makes sure the Babel output changes whenever the input
file changes. This works around a webpack bug that loses error messages
on "unchanged" files: https://github.com/webpack/webpack/issues/2538

# Installation

```shell
npm install https://github.com/sth/babel-plugin-add-filehash
```

# Usage

For general info about using Babel plugins see the [Babel handbook][1].

## Via `.babelrc` (Recommended)

Add the plugin to your projects `.babelrc`:

```json
{
  "plugins": ["add-filehash"]
}
```

## Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["add-filehash"]
});
```

 [1]: https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/user-handbook.md#manually-specifying-plugins

