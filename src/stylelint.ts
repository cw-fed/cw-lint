module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier", 'stylelint-config-css-modules'],
  plugins: ["stylelint-declaration-block-no-ignored-properties"],
  rules: {
    indentation: 2,
    "declaration-colon-space-after": "always",
    "at-rule-empty-line-before": [
      "always",
      {
        except: [
          "after-same-name",
          "inside-block",
          "blockless-after-same-name-blockless",
          "first-nested",
        ],
        ignore: ["after-comment"],
      },
    ],
    "at-rule-no-unknown": null,
    "max-nesting-depth": [
      4,
      {
        ignore: ["blockless-at-rules", "pseudo-classes"],
      },
    ],
    "color-hex-case": null,
    "function-parentheses-newline-inside": "never-multi-line",
    "selector-pseudo-element-colon-notation": "double",
    "selector-type-case": "lower",
    "no-descending-specificity": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx']
};
