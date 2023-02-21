# cw-lint

整合公司 lint 配置。包括：

## Quick Start

`.eslintrc.js` 配置，支持js和ts文件的切换。

```js
module.exports = {
  extends: "@cw/cw-lint/dist/eslint"
}
```

`stylelint.config.js`

```js
module.exports = require.resolve('@cw/cw-lint/dist/stylelint')
```

`prettier.config.js`

```js
module.exports = require.resolve('@cw/cw-lint/dist/prettier')
```

