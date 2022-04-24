import { transparentize } from "polished";
import themes from "Provider/themes";

const color = transparentize(0.8, themes.colors.white);

const defs = [
  {
    id: "dots",
    type: "patternDots",
    background: "inherit",
    color,
    size: 4,
    padding: 1,
    stagger: true,
  },
  {
    id: "lines",
    type: "patternLines",
    background: "inherit",
    color,
    rotation: -45,
    lineWidth: 6,
    spacing: 10,
  },
];

const fill = [
  {
    match: {
      id: "fries",
    },
    id: "dots",
  },
  {
    match: {
      id: "sandwich",
    },
    id: "lines",
  },
];

export { defs, fill };
