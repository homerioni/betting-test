/* eslint no-param-reassign: 0 */

const getPropertyWithPositions = (prefix) => {
  const rules = [];

  if (prefix) {
    rules.push(prefix);
    prefix = `${prefix}-`;
  } else {
    prefix = "";
  }

  return rules.concat([
    `${prefix}top`,
    `${prefix}right`,
    `${prefix}bottom`,
    `${prefix}left`,
  ]);
};

const getPropertyWithMinMax = (suffix) => [
  suffix,
  `min-${suffix}`,
  `max-${suffix}`,
];

const getBorderProperties = (infix) => {
  if (infix) {
    infix = `-${infix}`;
  } else {
    infix = "";
  }

  return [
    `border${infix}`,
    `border${infix}-width`,
    `border${infix}-style`,
    `border${infix}-color`,
    `border${infix}-radius`,
  ];
};

module.exports = {
  CSS_MODULES: ["composes"],

  RESET: ["all"],

  POSITIONING: ["position", "z-index"]
    .concat(getPropertyWithPositions())
    .concat(["inset"]),

  DISPLAY_AND_BOX_MODEL: ["display", "overflow", "overflow-x", "overflow-y"]
    .concat(getPropertyWithMinMax("width"))
    .concat(getPropertyWithMinMax("height"))
    .concat([
      "box-sizing",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "align-content",
      "align-items",
      "align-self",
      "justify-content",
      "order",
    ])
    .concat(getPropertyWithPositions("padding"))
    .concat(
      getBorderProperties()
        .concat(getBorderProperties("top"))
        .concat(getBorderProperties("right"))
        .concat(getBorderProperties("bottom"))
        .concat(getBorderProperties("left"))
    )
    .concat(getPropertyWithPositions("margin")),

  TEXT: [
    "font",
    "font-family",
    "font-style",
    "font-size",
    "font-weight",

    "line-height",
    "text-align",
    "color",
    "white-space",
    "text-overflow",
    "word-break",
  ],

  TRANSFORM: [
    "transition",
    "transition-property",
    "transition-delay",
    "transition-duration",
    "transition-timing-function",
    "transform",
    "transform-origin",
    "will-change",
    "animation",
    "animation-duration",
    "animation-fill-mode",
    "animation-name",
    "animation-timing-function",
  ],
};
