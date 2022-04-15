const defs = [
  {
    id: "dots",
    type: "patternDots",
    background: "inherit",
    color: "#38bcb2",
    size: 4,
    padding: 1,
    stagger: true,
  },
  {
    id: "lines",
    type: "patternLines",
    background: "inherit",
    color: "#eed312",
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
