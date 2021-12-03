const { cssPropSources } = require("./postcss.config");

module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  plugins: [
    "stylelint-value-no-unknown-custom-properties",
    "./tasks/styleint-atomic",
    "stylelint-prettier",
  ],
  rules: {
    indentation: null,
    "block-no-empty": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "comment-empty-line-before": null,
    "comment-whitespace-inside": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "length-zero-no-unit": [
      true,
      {
        ignore: ["custom-properties"],
      },
    ],
    "keyframes-name-pattern": "vkui-.+",
    "csstools/value-no-unknown-custom-properties": [
      true,
      {
        importFrom: cssPropSources,
      },
    ],
    // Skip reporting in pprecommit run, highlight in editor
    "vkui/atomic": [
      process.env.LINT_PRECOMMIT_RUN ? null : true,
      {
        severity: "warning",
      },
    ],
    "prettier/prettier": true,
  },
};
