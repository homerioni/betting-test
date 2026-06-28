const {
  CSS_MODULES,
  RESET,
  POSITIONING,
  DISPLAY_AND_BOX_MODEL,
  TRANSFORM,
  TEXT,
} = require("./properties-order");

const ALWAYS_MULTI_LINE = "always-multi-line";
const FIRST_NESTED = "first-nested";
const AFTER_COMMENT = "after-comment";

module.exports = {
  plugins: ["stylelint-order", "@stylistic/stylelint-plugin"],
  extends: ["stylelint-config-recommended", "stylelint-config-sass-guidelines"],
  customSyntax: "postcss-scss",
  rules: {
    "declaration-property-value-no-unknown": null,
    "declaration-property-value-allowed-list": null,
    "declaration-property-value-keyword-no-deprecated": null,
    "@stylistic/function-parentheses-space-inside": null,
    "@stylistic/function-comma-newline-after": ALWAYS_MULTI_LINE,
    "@stylistic/function-comma-space-after": "always-single-line",
    "@stylistic/function-parentheses-newline-inside": ALWAYS_MULTI_LINE,
    "@stylistic/function-max-empty-lines": 0,
    "alpha-value-notation": [
      "percentage",
      {
        exceptProperties: ["opacity"],
      },
    ],
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", FIRST_NESTED],
        ignore: [AFTER_COMMENT],
        ignoreAtRules: ["else"],
      },
    ],
    "at-rule-no-unknown": null,
    "property-no-vendor-prefix": null,
    "value-no-vendor-prefix": null,
    "at-rule-no-vendor-prefix": true,
    "block-no-empty": true,
    "color-function-notation": "modern",
    "color-hex-length": "short",
    "color-no-invalid-hex": true,
    "comment-empty-line-before": [
      "always",
      {
        except: [FIRST_NESTED],
        ignore: ["stylelint-commands"],
      },
    ],
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",
    "custom-property-empty-line-before": [
      "always",
      {
        except: ["after-custom-property", FIRST_NESTED],
        ignore: [AFTER_COMMENT, "inside-single-line-block"],
      },
    ],
    "declaration-block-no-duplicate-custom-properties": true,
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates-with-different-values"],
      },
    ],
    "declaration-block-no-redundant-longhand-properties": [
      true,
      { ignoreShorthands: ["inset"] },
    ],
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-single-line-max-declarations": 1,
    "font-family-name-quotes": "always-unless-keyword",
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-url-quotes": "always",
    "hue-degree-notation": "angle",
    "keyframe-declaration-no-important": true,
    "length-zero-no-unit": true,
    "max-nesting-depth": [
      7,
      {
        ignoreAtRules: [
          "each",
          "media",
          "supports",
          "include",
          "pseudo-classes",
        ],
      },
    ],
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "named-grid-areas-no-invalid": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-invalid-double-slash-comments": true,
    "no-invalid-position-at-import-rule": true,
    "no-irregular-whitespace": true,
    "number-max-precision": 4,
    "order/properties-alphabetical-order": null,
    "order/properties-order": [
      [
        {
          properties: CSS_MODULES,
          noEmptyLineBetween: true,
          emptyLineBefore: "always",
        },
        {
          properties: RESET,
          noEmptyLineBetween: true,
          emptyLineBefore: "always",
        },
        {
          properties: POSITIONING,
          noEmptyLineBetween: true,
          emptyLineBefore: "always",
        },
        {
          properties: DISPLAY_AND_BOX_MODEL,
          noEmptyLineBetween: true,
          emptyLineBefore: "always",
        },
        {
          properties: TEXT,
          noEmptyLineBetween: true,
          emptyLineBefore: "always",
        },
        {
          properties: TRANSFORM,
          noEmptyLineBetween: true,
          emptyLineBefore: "always",
        },
      ],
      {
        unspecified: "bottomAlphabetical",
        emptyLineBeforeUnspecified: "always",
      },
    ],
    "property-no-unknown": [
      true,
      {
        ignoreProperties: ["box-orient"],
      },
    ],
    "rule-empty-line-before": [
      ALWAYS_MULTI_LINE,
      {
        except: [FIRST_NESTED],
        ignore: [AFTER_COMMENT],
      },
    ],
    "scss/at-function-pattern": "^[a-z]+[a-zA-Z0-9]+$",
    "scss/selector-no-redundant-nesting-selector": null,
    "selector-attribute-quotes": "always",
    "selector-class-pattern":
      "^[a-z](([a-z0-9]*)((_|-|__|--)[a-z0-9]+)*|[a-zA-Z0-9]+)$",
    "selector-max-id": 1,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["horizontal", "global"] },
    ],
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-max-compound-selectors": 4,
    "selector-type-no-unknown": [
      true,
      {
        ignore: ["custom-elements"],
      },
    ],
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "unit-no-unknown": true,
    "@stylistic/string-quotes": "double",
    "selector-no-qualifying-type": null,
    "no-descending-specificity": null,
    "nesting-selector-no-missing-scoping-root": null,
    // Отключает проверку на border: none в border: 0
    // TODO: разобраться как лучше поступить
    "declaration-property-value-disallowed-list": null,
    // Отключает проверка на -moz-box-orient
    "property-no-deprecated": null,
    // TODO: вернуть в 18 версии (на 17 версии забагованное правило)
    "no-invalid-position-declaration": null,
  },
};
